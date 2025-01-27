require('dotenv').config();

const express = require('express');
const { MongoClient, ObjectId } = require('mongodb');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const winston = require('winston');

const app = express();

// Middleware
app.use(express.json());

// Ensure ALLOWED_ORIGINS is configured correctly in your .env
const allowedOrigins = process.env.ALLOWED_ORIGINS ? process.env.ALLOWED_ORIGINS.split(',') : ['http://localhost:3000'];
app.use(cors({ origin: allowedOrigins }));

// Logger Configuration
const logger = winston.createLogger({
    level: 'info',
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json()
    ),
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({ filename: 'server.log' }),
    ],
});

// Environment Variables
const CONNECTION_STRING = process.env.MONGO_URI;
const DATABASE_NAME = process.env.DATABASE_NAME || 'sales';
const USERS_COLLECTION = 'sales';
const JWT_SECRET = process.env.JWT_SECRET;
const TOKEN_EXPIRY = process.env.TOKEN_EXPIRY || '1h';

if (!JWT_SECRET) {
    logger.error('JWT_SECRET is not defined. Please add it to your .env file.');
    process.exit(1);
}

// Database Connection
let database; // Declare it globally to be used in routes

async function connectToDatabase() {
    try {
        const client = await MongoClient.connect(CONNECTION_STRING, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        database = client.db(DATABASE_NAME);
        logger.info('Connected to MongoDB');
    } catch (error) {
        logger.error('Failed to connect to MongoDB:', error);
        process.exit(1);
    }
}

// Define the root route for GET requests
app.get('/', (req, res) => {
    res.send('Welcome to the API!');
});

// Registration Route
app.post('/api/register', async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ error: 'Username and password are required' });
    }

    try {
        const existingUser = await database.collection(USERS_COLLECTION).findOne({ username });
        if (existingUser) {
            return res.status(400).json({ error: 'Username already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = {
            username,
            password: hashedPassword,
            createdAt: new Date(),
        };

        const result = await database.collection(USERS_COLLECTION).insertOne(newUser);
        return res.status(201).json({ message: 'User registered successfully', userId: result.insertedId });
    } catch (error) {
        logger.error('Error during registration:', error);
        return res.status(500).json({ error: 'An error occurred while registering. Please try again later.' });
    }
});

// Login Route
app.post('/api/login', async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await database.collection(USERS_COLLECTION).findOne({ username });
        if (!user) {
            logger.warn('Login failed: user not found');
            return res.status(401).json({ error: 'Invalid username or password' });
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            logger.warn('Login failed: invalid password');
            return res.status(401).json({ error: 'Invalid username or password' });
        }
        const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: TOKEN_EXPIRY });
        logger.info('Login successful, token issued');
        return res.json({ message: 'Login successful', token });
    } catch (error) {
        logger.error('Error during login:', error);
        return res.status(500).json({ error: 'An error occurred while logging in. Please try again later.' });
    }
});

// Profile Route
app.get('/api/profile', async (req, res) => {
    const token = req.headers.authorization;

    if (!token) {
        logger.warn('No token provided in the request');
        return res.status(401).json({ error: 'No token provided, please log in.' });
    }

    logger.info('Authorization header received:', token);

    try {
        const tokenWithoutBearer = token.split(' ')[1];

        if (!tokenWithoutBearer) {
            logger.warn('Token is missing after "Bearer"');
            return res.status(401).json({ error: 'Invalid token format. Must be "Bearer <token>"' });
        }

        const decoded = jwt.verify(tokenWithoutBearer, JWT_SECRET);

        const userId = decoded.userId;
        const user = await database.collection(USERS_COLLECTION).findOne({ _id: ObjectId(userId) });

        if (!user) {
            logger.warn(`User with ID ${userId} not found`);
            return res.status(404).json({ error: 'User not found' });
        }

        const { password, ...userProfile } = user;
        res.status(200).json(userProfile);
    } catch (error) {
        logger.error('Error during profile fetch:', error);
        res.status(500).json({
            error: 'An error occurred while fetching the profile. Please try again later.',
            details: error.message,
        });
    }
});

// Start the Server
const PORT = process.env.PORT || 5038;
const HOSTNAME = process.env.HOSTNAME || 'localhost';

connectToDatabase().then(() => {
    app.listen(PORT, HOSTNAME, () => {
        console.log(`Server running on http://${HOSTNAME}:${PORT}`);
    });
}).catch((err) => {
    console.error('Database connection failed:', err);
});

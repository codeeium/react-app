require('dotenv').config();
const express = require('express');
const { MongoClient, ObjectId } = require('mongodb');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const winston = require('winston');

const app = express();
app.use(express.json());
app.use(cors({ origin: process.env.ALLOWED_ORIGINS.split(',') }));

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
const JWT_SECRET = process.env.JWT_SECRET;  // Ensure this is loaded
const TOKEN_EXPIRY = process.env.TOKEN_EXPIRY || '1h';

if (!JWT_SECRET) {
    logger.error('JWT_SECRET is not defined. Please add it to your .env file.');
    process.exit(1);  // Terminate the server if JWT_SECRET is missing
}

// Database Connection
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

// Registration Endpoint
app.post('/api/register', async (req, res) => {
    // Registration logic remains the same
});

// Login Endpoint
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

        // Sign the JWT token
        const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: TOKEN_EXPIRY });
        res.json({ message: 'Login successful', token });
    } catch (error) {
        logger.error('Error during login:', error);
        res.status(500).json({ error: 'An error occurred. Please try again later.' });
    }
});

// Profile Endpoint
app.get('/api/profile', async (req, res) => {
    // Profile logic remains the same
});

// Start the Server
const PORT = process.env.PORT || 5038;
connectToDatabase().then(() => {
    app.listen(PORT, () => {
        logger.info(`Server is running on port ${PORT}`);
    });
});

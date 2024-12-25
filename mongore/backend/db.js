require('dotenv').config();
const { MongoClient } = require('mongodb');

// Load connection URL and database name from environment variables
const url = process.env.MONGO_URL;
const dbName = process.env.DB_NAME;

if (!url || !dbName) {
    console.error('Missing MongoDB URL or Database Name in environment variables.');
    process.exit(1);
}

// Create a new MongoClient instance
const client = new MongoClient(url);

// Function to connect to the database
async function connectToDatabase() {
    try {
        // Connect the client to the server
        await client.connect();
        console.log('Connected successfully to MongoDB server');

        // Select the database
        const db = client.db(dbName);

        // List collections in the database
        const collections = await db.collections();
        const collectionNames = collections.map(({ collectionName }) => collectionName);
        console.log('Collections:', collectionNames);

    } catch (err) {
        console.error('Database connection error:', err.message);
    } finally {
        // Close the connection
        await client.close();
    }
}

// Call the function to connect to the database
connectToDatabase().catch(
    err => console.error('Unexpected error:', err.message)
);

module.exports = connectToDatabase;

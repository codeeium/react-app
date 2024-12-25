// index.js (or app.js)
require('dotenv').config(); // Loads environment variables from .env

const express = require('express');
const connectDB = require('./db'); // Assuming db.js is in the same directory
const app = express();

const startServer = async () => {
    try {
        await connectDB(); // Connect to the database
        console.log('Connected to MongoDB');

        app.use(express.json()); // Middleware to parse JSON request bodies

        app.listen(3000, () => {
            console.log("Server started on port 3000");
        });
    } catch (err) {
        console.error("Error starting the server:", err);
        process.exit(1); // Exit if connection fails
    }
};

startServer();

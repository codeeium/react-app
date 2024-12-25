require('dotenv').config(); // Loads environment variables from .env

const express = require('express');
const connectDB = require('./db'); // Assuming db.js is in the same directory
const salesModel = require('./salesModel'); // Import the sales model
const app = express();

const startServer = async () => {
    try {
        await connectDB(); // Connect to the database
        console.log('Connected to MongoDB');

        app.use(express.json()); // Middleware to parse JSON request bodies

        // API endpoint to insert a new sales document
        app.post('/sales', async (req, res) => {
            try {
                const { name, desc, year } = req.body;

                // Create new sales document
                const newSale = new salesModel({
                    name,
                    desc,
                    year
                });

                // Save the document to the database
                await newSale.save();

                res.status(201).json({ message: 'Sales data inserted successfully', newSale });
            } catch (error) {
                console.error('Error inserting sales data:', error);
                res.status(500).json({ message: 'Failed to insert sales data' });
            }
        });

        app.listen(3000, () => {
            console.log("Server started on port 3000");
        });
    } catch (err) {
        console.error("Error starting the server:", err);
        process.exit(1); // Exit if connection fails
    }
};

startServer();

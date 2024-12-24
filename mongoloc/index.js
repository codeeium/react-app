const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = 3000;

// MongoDB Connection
mongoose.connect("mongodb://localhost:27017/admin")
    .then(() => {
        console.log("Connected to database");
    })
    .catch((err) => {
        console.error("Failed to connect to MongoDB:", err);
        process.exit(1);  // Stop if DB connection fails
    });

// Test Route
app.get("/", (req, res) => {
    res.send("API is working");
});

// Define Schema
const salesSchema = new mongoose.Schema({
    _id: String,
    website: String,
    address: String,
    email: String,
    name: String,
    phone: String
});

// Create Model
const SalesModel = mongoose.model("sales", salesSchema);


// GET Route to Fetch Sales Data
app.get("/getSales", async (req, res) => {
    console.log("GET /getSales hit");
    try {
        const sales = await SalesModel.find({});
        console.log("Fetched Sales:", sales);
        res.status(200).json(sales);
    } catch (err) {
        console.error("Error fetching sales:", err);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
});

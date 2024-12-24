require('dotenv').config(); // Loads environment variables from .env

const express = require('express');
const connectDB = require('./db.js');
const app = express();

connectDB().then(r =>  console.log(r));    // Connect to the database

app.use(express.json()); // Middleware to parse JSON request bodies

app.listen(3000,
    () => console.log("Server started on port 3000"));




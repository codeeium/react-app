import express from "express";
import mongoose from "mongoose";
import cors from "cors";

// Define a Sales model (adjust to your schema)
const Sales = mongoose.model("Sales", new mongoose.Schema({
    website: String,
    address: String,
    email: String,
    name: String,
    phone: String,
}));

const app = express();
app.use(cors());

app.get("/api/sales", async (req, res) => {
    try {
        const salesData = await Sales.find();
        res.json(salesData);
    } catch (error) {
        res.status(500).json({ message: "Error fetching sales data" });
    }
});

mongoose.connect("mongodb://localhost:27017/sales")
    .then(() => {
        console.log("MongoDB connected...");
        app.listen(5000, () => {
            console.log("Server started on port 5000");
        });
    })
    .catch((err) => console.log(err));

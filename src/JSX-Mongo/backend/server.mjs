import express from "express";
import connectDB from "./db.mjs";

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
const startServer = async () => {
    try {
        await connectDB();
        console.log("MongoDB connected...");

        app.get("/", (_, res) => {
            res.send("API is running...");
        });

        app.listen(PORT, () => {
            console.log(`Server running at http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error("Failed to connect to MongoDB:", error);
        process.exit(1);
    }
};

// Handle the promise properly
startServer()
    .then(() => console.log("Server started successfully."))
    .catch((err) => {
        console.error("Error during startup:", err);
        process.exit(1);
    });

process.on("SIGTERM", () => {
    console.log("Shutting down server...");
    process.exit(0);
});
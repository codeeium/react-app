const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        // Ensure the MongoDB URI is properly constructed.
        const dbURI =
            // 'mongodb+srv://dev1:Piller1234@salescluster.2w4ug.mongodb.net/sales?retryWrites=true&w=majority&appName=salescluster'
        'mongodb+srv://dev1:piller1234@salescluster.2w4ug.mongodb.net'
        // Connect to MongoDB
        await mongoose.connect(dbURI);

        // Log successful connection
        console.log(`Connected to MongoDB: ${mongoose.connection.host}`);
    } catch (error) {
        // Handle connection errors
        console.error('Failed to connect to MongoDB:', error.message);
        process.exit(1); // Exit with failure code
    }
};

// Export the connectDB function to use it in other files.
module.exports = connectDB;

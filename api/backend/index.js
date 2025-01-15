require('dotenv').config();
const Express = require('express');
const { MongoClient } = require('mongodb');
const cors = require('cors');
const Multer = require('multer');
const {response} = require("express");

const app = Express();
app.use(cors());
app.use(Express.json()); // Add JSON body parser middleware

const CONNECTION_STRING = process.env.MONGO_URI;
const DATABASE_NAME = 'sales';
const COLLECTION_NAME = 'sales';

let database;

// Use async function to handle MongoDB connection
async function connectToDatabase() {
    try {
        const client = await MongoClient.connect(CONNECTION_STRING, { useNewUrlParser: true, useUnifiedTopology: true });
        database = client.db(DATABASE_NAME);
        console.log('MongoDB successfully connected');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        process.exit(1); // Exit the application if the DB connection fails
    }
}

app.listen(5038, async () => {
    await connectToDatabase(); // Ensure DB is connected before starting the server
});

app.get('/api/GetNotes', async (request, response) => {
    try {
        const data = await database.collection(COLLECTION_NAME).find().toArray();
        response.send(data);
    } catch (error) {
        response.status(500).send('Error fetching notes');
    }
});

app.post('/api/AddNotes', Multer().none(), async (request, response) => {
    try {
        // You can use MongoDB's ObjectId for generating unique IDs instead of counting
        const newNote = {
            description: request.body.description,
            createdAt: new Date() // Optional, to track when the note was added
        };

        const result = await database.collection(COLLECTION_NAME).insertOne(newNote);
        response.send('Added successfully');
    } catch (error) {
        response.status(500).send('Error adding note');
    }
});

// app.delete('/api/DeleteNotes',
//     async (request, response) => {
//     try {
//         const { id } = request.query;
//         const result = await database.collection(COLLECTION_NAME).deleteOne({ id: id });
//
//         if (result.deletedCount === 0) {
//             response.status(404).send('Note not found');
//         } else {
//             response.json('Deleted successfully');
//         }
//     } catch (error) {
//         response.status(500).send('Error deleting note');
//     }
// });
app.delete('/api/DeleteNotes', async (req, res) => {
    const { id } = req.query;

    if (!id) {
        return res.status(400).json({ error: 'ID is required' });
    }

    const result = await database.collection(COLLECTION_NAME).deleteOne({ id });

    if (result.deletedCount === 0) {
        return res.status(404).json({ error: 'Note not found' });
    }

    res.json({ message: 'Deleted successfully' });
});

// console.log(await response.text());

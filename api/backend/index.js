require('dotenv').config();

const Express = require('express');
const MongoClient = require('mongodb').MongoClient;
const cors = require('cors');
const Multer = require('multer');

const app = Express();
app.use(cors());

const CONNECTION_STRING = process.env.MONGO_URI

const DATABASE_NAME = 'salesdb';
const COLLECTION_NAME = 'sales-cols';
var database;

app.listen(5038, () => {
    MongoClient.connect(CONNECTION_STRING,
        (error, client) => {
        database = client.db(DATABASE_NAME);
        console.log('Mongo DB successfully connected');
    });
})

app.get('/api/GetNotes', (request, response) => {
    database.collection(COLLECTION_NAME).find().toArray()
    .then((data) => {
        response.send(data);
    })
});

app.post('/api/AddNotes', Multer().none(), (request, response) => {
    database.collection(COLLECTION_NAME).count({},function (err, numOfDocs) {
        database.collection(COLLECTION_NAME).insertOne({
            id: (numOfDocs + 1).toString(),
            description: request.body.description
            // name: request.body.name,
            // price: request.body.price
        })
        response.send('Added successfully');

    })
})

app.delete('/api/DeleteNotes',
    (request, response) => {
    database.collection(COLLECTION_NAME).deleteOne({
        id: request.query.id
    })
    response.json('Deleted successfully');
})

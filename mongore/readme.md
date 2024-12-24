
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://codeeium:<db_password>@cluster0.2w4ug.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
serverApi: {
version: ServerApiVersion.v1,
strict: true,
deprecationErrors: true,
}
});

async function run() {
try {
// Connect the client to the server	(optional starting in v4.7)
await client.connect();
// Send a ping to confirm a successful connection
await client.db("admin").command({ ping: 1 });
console.log("Pinged your deployment. You successfully connected to MongoDB!");
} finally {
// Ensures that the client will close when you finish/error
await client.close();
}
}
run().catch(console.dir);



mongodb+srv://codeeium:<db_password>@cluster0.2w4ug.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

mongodb://atlas-sql-6766eca9c5877816ac61b95f-2w4ug.a.query.mongodb.net/sales?ssl=true&authSource=admin
----

const express = require("express");
const connectDB = require("./db");
const cors = require("cors");
const itemModel = require("./Item");
const PORT = 3000;


const app = express();
app.use(express.json());
app.use(cors());
connectDB();

app.get("/", async (req, res) => {
const items = await itemModel.find();
res.json(items);
});

app.listen(PORT, () => {
console.log(`Server is running on port ${PORT}`);
});

'mongodb+srv://dev1:Piller1234@salescluster.2w4ug.mongodb.net/sales?retryWrites=true&w=majority&appName=salescluster'
'mongodb+srv://dev1:Piller1234@salescluster.2w4ug.mongodb.net/sales?retryWrites=true&w=majority&appName=salescluster'
'mongodb+srv://dev1:Piller1234@salescluster.2w4ug.mongodb.net/sales?retryWrites=true&w=majority&appName=salescluster'
'mongodb+srv://dev1:Piller1234@salescluster.2w4ug.mongodb.net/sales?retryWrites=true&w=majority&appName=salescluster'

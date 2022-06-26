console.clear();
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
const { MongoClient, ObjectId } = require('mongodb')
require('dotenv').config()
app.use(bodyParser.json());
const uri = process.env.uri; // Grab URI from .env file
const port = 3001;

// Comment this when in production
var cors = require('cors')
app.use(cors())

// Connect server to database

const client = new MongoClient(uri)
try {
  client.connect()
  console.log("Connected to database")
} catch (error) {
  console.log("Error connecting to database")
  console.log(error)
}

app.post('/api/newsletter/register', async function (req, res) {
  // Check if email already is in database
  if (req.body) {
    const db = client.db('BadToadGames')
    const collection = db.collection('Newsletter')
    const result = await collection.findOne({ email: req.body.email })
    if (result === null) {
      // Email not in database
      const result = await client.db("BadToadGames").collection("Newsletter").insertOne({
        "email": req.body.email,
        "ip": req.body.ip,
      });
      res.send(result.insertedId);
    } else {
      // Email already in database
      res.send("Email already in database")
    }
  } else {
    res.send("Invalid request");
  }
});

// Start server
app.listen(port, function () {
  console.log(`Server listening on port ${port} | ${new Date()}`);
});
"use strict";
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require("cors");
const { MongoClient } = require("mongodb");

app.use(
    cors({
        origin: "*",
    })
)
const URI = "mongodb+srv://nikhil1:nikhil123@cluster0.w3aqys7.mongodb.net/?retryWrites=true&w=majority"

async function connect() {
    try {
        await mongoose.connect(URI)
        console.log('Connected to Monogo DB');
    } catch (err) {
        console.error(err);
    }
}

connect()

app.post('/api/posts', async (req, res) => {
    console.log(req.body, "req")

    const options = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    };

    const client = new MongoClient(URI, options);

    // connect to the client
    await client.connect();

    // connect to the database (db name is provided as an argument to the function)
    const db = client.db("posts");

    // Save the blog post to the MongoDB database
    const result = await db.collection('posts').insertOne(req.body);
    res.json({ success: true, postId: result.insertedId });
});

app.listen(4000, () => {
    console.log('listening on port 4000')
})
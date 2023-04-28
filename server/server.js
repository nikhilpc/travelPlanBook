const express = require("express");
const { MongoClient } = require("mongodb");
const morgan = require("morgan");
const { addPosting, getAllPosts, deletePosting, getPostsPerCountry, updatePosting } = require("./handlers");
const cors = require("cors");
require("dotenv").config();
const MONGO_URI = process.env.REACT_APP_MONGO_URI;

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

const PORT = 4000;
const app = express()
    // log more info to the console
    .use(
        cors({
            origin: "*",
        })
    )
    .use(morgan("tiny"))
    .use(express.json())

    // any requests for static files will go into the public folder
    .use(express.static("public"))

    // endpoints
    .post("/posts", addPosting)
    .get("/allposts", getAllPosts)
    .get("/posts/:countryName", getPostsPerCountry)
    .patch("/posts/:_id", updatePosting)
    .delete("/posts/:_id", deletePosting)

    // catch all endpoint
    .get("*", (req, res) => {
        res.status(404).json({
            status: 404,
            message: "This is obviously not what you are looking for.",
        });
    });

const setup = async () => {
    const client = new MongoClient(MONGO_URI, options);
    await client.connect();
    app.locals.client = client;
};

setup()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server is listening on port: ${PORT}`);
        });
    })
    .catch((err) => {
        console.log("Error: ", err);
    });

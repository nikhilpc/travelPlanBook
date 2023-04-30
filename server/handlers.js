const assert = require('assert');
const { v4: uuidv4 } = require('uuid');
const { sendResponse } = require('./utils');

const addPosting = async (req, res) => {

    try {

        const client = req.app.locals.client;
        const db = client.db("posts");
        const collection = "posts";
        const _id = uuidv4();
        const result = await db
            .collection(collection)
            .insertOne({ ...req.body, date: new Date(), _id });
        console.log(result);
        assert.equal(
            _id,
            result.insertedId,
            'Duplicate key error: posting with this _id already exists.'
        );
        sendResponse({

            res,
            status: 201,
            data: { _id, ...req.body },
            message: 'Posting was added.',
        });
    } catch (error) {
        sendResponse({ res, status: 500, message: err.message });

        console.log(error, "error")
    }

};
const getAllPosts = async (req, res) => {

    try {

        const client = req.app.locals.client;
        const db = client.db("posts");
        const collection = "posts";
        const _id = uuidv4();
        const result = await db
            .collection(collection)
            .find().toArray();
        console.log(result);
        sendResponse({ res, status: 200, data: result });
    } catch (err) {
        sendResponse({ res, status: 500, message: err.message });
    }
};

const getPostsPerCountry = async (req, res) => {
    const countryName = req.params.countryName;

    try {

        const client = req.app.locals.client;
        const db = client.db("posts");
        const collection = "posts";
        const _id = uuidv4();
        const result = await db
            .collection(collection)
            .find({ "countryName": countryName }).toArray();
        console.log(result);
        sendResponse({ res, status: 200, data: result });
    } catch (err) {
        sendResponse({ res, status: 500, message: err.message });
    }
};
const updatePosting = async (req, res) => {

    try {

        const client = req.app.locals.client;
        const db = client.db("posts");
        const collection = "posts";
        const _id = req.params._id;
        console.log(_id, "_id value is here")
        const { title, author, content } = req.body
        const result = await db
            .collection(collection)
            .updateOne(
                { "_id": _id },
                { $set: { title: title, author: author, content: content } });

        sendResponse({

            res,
            status: 201,
            data: { ...req.body },
            message: 'Posting was updated.',
        });
    } catch (error) {
        sendResponse({ res, status: 500, message: error.message });

        console.log(error, "error")
    }

};
const deletePosting = async (req, res) => {
    const { _id } = req.params;

    try {
        const client = req.app.locals.client;
        const db = client.db("posts");
        const collection1 = "posts";
        // delete posting from db

        const result = await db.collection(collection1).deleteOne({ _id });
        assert.equal(1, result.deletedCount, 'Blog not found');

        sendResponse({
            res,
            status: 200,
            data: { result },
            message: 'Posting was removed.',
        });
    } catch (err) {
        sendResponse({ res, status: 500, message: err.message });
    }
};
module.exports = {
    addPosting, getAllPosts, deletePosting, getPostsPerCountry, updatePosting
};
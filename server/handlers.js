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
            .insertOne({ ...req.body, _id });
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


module.exports = {
    addPosting
};
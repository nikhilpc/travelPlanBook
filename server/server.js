const express = require('express');
const app = express();
const morgan = require("morgan");

app.use(morgan("tiny"))
app.get('/api', (req, res) => {
    res.json({"users": ["user1", "user2", "user3"]});
});

app.listen(4000, () => {
    console.log('Example app listening on port 4000!');
});
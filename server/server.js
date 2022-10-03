const express = require('express');
const mangoose = require('mongoose');
require("dotenv/config")

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.send("hello world!");
})
mangoose.connect(
    process.env.DB_CONNECTION_STRING,
    { useUnifiedTopology: true, useNewUrlParser: true },
    (req, res) => {
        console.log("Connected to the database");
    });
app.get('/users', (req, res) => {
    res.send("hello user");
})

app.listen(process.env.PORT, () => {
    console.log('listening on port ' + process.env.PORT);
});
//const { response } = require('express');
const express = require('express');
const mangoose = require('mongoose');


//const LoginUser = require('./model/LoginUser');
require("dotenv/config")

const app = express();
app.use(express.json());

app.use(express.urlencoded());
app.get('/', (req, res) => {
    res.send("hello world!");
}
)
app.post("/login", (req, res) => {
    try {
        console.log("it works");
        res.send("hello server works");
    }
    catch (err) {
        console.log(err);
    }
})
mangoose.connect(
    process.env.DB_CONNECTION_STRING,
    { useUnifiedTopology: true, useNewUrlParser: true },
    (req, res) => {
        console.log("Connected to the database");
    });


app.listen(process.env.PORT, () => {
    console.log('listening on port ' + process.env.PORT);
});
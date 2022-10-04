import express from 'express';
import mongoose from 'mongoose';
import routes from './Routes/routes.js';

import * as dotenv from 'dotenv'
dotenv.config()

const app = express();
app.use(express.json());
app.use(express.static('styles'))
app.use(express.static('images'));
app.use('/page', routes);

mongoose.connect(
    process.env.DB_CONNECTION_STRING, { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => app.listen(process.env.PORT), () => console.log("server listening on port " + process.env.PORT))
    .catch(err => console.log(err));

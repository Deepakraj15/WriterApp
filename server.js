import express from 'express';
import mongoose from 'mongoose';
import routes from './Routes/routes.js';

import * as dotenv from 'dotenv'
dotenv.config()

const app = express();
app.use(express.json());
app.use('/', routes);
app.use(express.static('styles'))
app.use(express.static('images'));


// mongoose.connect(
//     process.env.DB_CONNECTION_STRING, { useUnifiedTopology: true, useNewUrlParser: true });

app.listen(process.env.PORT);
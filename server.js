import express from 'express';
import mongoose from 'mongoose';
import routes from './Routes/routes.js';
import cookieparser from 'cookie-parser';
import ejs from 'ejs';
import * as dotenv from 'dotenv'
dotenv.config()

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieparser());
app.set('view engine', 'ejs');
app.use('/', routes);
app.use(express.static('styles'))
app.use(express.static('images'));


mongoose.connect(process.env.DB_CONNECTION_STRING, { useUnifiedTopology: true, useNewUrlParser: true });
mongoose.connection.on('connected', () => {
    console.log('Mongoose is connected');
})
app.listen(process.env.PORT);


const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const router = require('./routes/transactionRoute')
const PORT = process.env.PORT || 5000;
const URL = process.env.SERVER_URL;
const MONGODB = process.env.MONGO_URL;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'views')));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose.connect(MONGODB)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log('Err', err));

app.use('/', router);

app.listen(PORT, (err) => {
    if (!err) {
        console.log(`Server running in ${URL}${PORT}`);
    } else {
        console.log('Err', err);
    };
});
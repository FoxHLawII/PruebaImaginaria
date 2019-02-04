require('./config/enviroment');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./routes');
const express = require('express');
const app = express();

// Models
const Client = require('./models/client');
const Order = require('./models/order');

// Configs
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes
app.use(routes);

// DB
mongoose.connect(process.env.DB_URL, { useNewUrlParser: true }, err => err ? console.log(err) : console.log('DB online'));

// Initial Data
const mockClient = new Client({ name: 'Name 1', surname: 'Surname 1', email: 'NameSurname@gmail.com', phone: 123123 });

app.listen(process.env.PORT, () => {
    console.log(`init in ${process.env.PORT}`);
});
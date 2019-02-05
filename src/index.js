require('./config/enviroment');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./routes');
const express = require('express');
const app = express();

// Models
const Client = require('./models/client');
const Order = require('./models/order');
const Driver = require('./models/driver');

// Configs
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes
routes.clientRoutes(app);
routes.driverRoutes(app);

// DB
mongoose.connect(process.env.DB_URL, { useNewUrlParser: true }, (err) => err ? console.log(err) : console.log('DB online'));

// Initial Data
try {
    Client.remove({}).then(() => {
        new Client({ name: 'Name 1', surname: 'Surname 1', email: 'NameSurname@gmail.com', phone: 123123 })
            .save(err => console.log(err));
    });
    Driver.remove({}).then(() => {
        new Driver({ name: 'BestDriver', orders: [] }).save(err => console.log(err));
    });
    Order.remove({}).exec();
} catch (e) {}

app.listen(process.env.PORT, () => {
    console.log(`init in ${process.env.PORT}`);
});
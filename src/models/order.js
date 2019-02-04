const mongoose = require("mongoose");
const { Schema } = mongoose;

const clientSchema = require('./client').schema;

const orderSchema = new Schema({
    client: clientSchema,
    address: String,
    date: String,
    time: String
});

module.exports = mongoose.model('Order', orderSchema);
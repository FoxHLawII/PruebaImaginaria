const mongoose = require("mongoose");
const idValidator = require('mongoose-id-validator');
const { Schema } = mongoose;

const orderSchema = new Schema({
    address: String,
    date: {
        type: Date
    },
    client: {
        type: Schema.Types.ObjectId,
        ref: 'Client'
    }
});

orderSchema.plugin(idValidator, { message: 'Debe ser un id valido' });

module.exports = mongoose.model('Order', orderSchema);
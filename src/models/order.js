const mongoose = require("mongoose");
const idValidator = require('mongoose-id-validator');
const { Schema } = mongoose;

const orderSchema = new Schema({
    address: {
        type: String,
        required: [true, 'Dato requerido']
    },
    date: {
        type: Date,
        required: [true, 'Dato requerido']
    },
    client: {
        type: Schema.Types.ObjectId,
        ref: 'Client'
    }
});

orderSchema.plugin(idValidator, { message: 'Debe ser un id valido' });

module.exports = mongoose.model('Order', orderSchema);
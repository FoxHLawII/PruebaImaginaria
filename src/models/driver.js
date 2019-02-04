const mongoose = require('mongoose');
const idValidator = require('mongoose-id-validator');

const { Schema } = mongoose;

const orderSchema = require('./order').schema;

const driverSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Campo requerido']
    },
    active: {
        type: Boolean,
        default: true
    },
    orders: [{
        type: Schema.Types.ObjectId,
        ref: 'Order'
    }],
});

driverSchema.plugin(idValidator, { message: 'Debe ser un id valido' });

module.exports = mongoose.model('Driver', driverSchema);
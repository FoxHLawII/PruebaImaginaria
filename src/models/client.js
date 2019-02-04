const mongoose = require("mongoose");
const uniqueValidator = require('mongoose-unique-validator');

const { Schema } = mongoose;

const clientSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Campo requerido']
    },
    surname: {
        type: String,
        required: [true, 'Campo requerido']
    },
    email: {
        type: String,
        required: [true, 'Campo requerido'],
        unique: true
    },
    phone: {
        type: String
    }
});

clientSchema.plugin(uniqueValidator, { message: '{VALUE} ya está en uso' });

module.exports = mongoose.model('Client', clientSchema);
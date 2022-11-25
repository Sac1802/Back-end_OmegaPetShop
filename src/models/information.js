const mongoose = require('mongoose');

let Schema = mongoose.Schema;

const userSchema = new Schema({

    nombre: {
        type: String,
        required: true
    },
    direction1: {
        type: String,
        required: true
    },
    direction2: {
        type: String,
        required: false
    },
    postal:{
        type: Number,
        required: true
    },
    cv:{
        type: Number,
        required: true
    },
    numbercard:{
        type: Number,
        required: true
    },
    expirecard:{
        type: String,
        required: true
    },
    city:{
        type: String,
        required: true
    }
},{
    timestamps: true
});

const information = mongoose.model('information', userSchema);

module.exports = information;
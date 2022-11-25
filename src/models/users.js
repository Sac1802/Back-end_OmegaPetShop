const mongoose = require('mongoose');

let Schema = mongoose.Schema;

const userSchema = new Schema({
    userName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    status:{
        type: String,
        required: true
    }
},{
    timestamps: true
});

const Users = mongoose.model('user', userSchema);

module.exports = Users;
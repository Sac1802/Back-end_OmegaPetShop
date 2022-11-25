const mongoose = require('mongoose');

let Schema = mongoose.Schema;


const productSchema = new Schema({

    nameproduct: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    productQuantity: {
        type: Number,
        required: true
    },
    animal: {
        type: String,
        required: true
    },
    information: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }, 
    location: {
        type: String,
        required: true 
    },
    url:{
        type: String,
        required: ('url')
    }
},{
timestamps: true
});

const Post = mongoose.model('posts', productSchema);

module.exports = Post;
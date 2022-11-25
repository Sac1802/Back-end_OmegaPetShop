const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://root:root@cluster0.nsjzhqv.mongodb.net/mintic?retryWrites=true&w=majority",{}, (err, result) => {
    if(err){
        console.log(err);
    }else{
        console.log("Connection successful a Data Base");
    }
});
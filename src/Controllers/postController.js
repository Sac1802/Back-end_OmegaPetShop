const { query } = require('express');
let Post = require('../models/post');

function savePost ( req, res){

    if(Post){
        let myPost = new Post( req.body );
        //myPost.user = req.data.email;

    myPost.save( ( err, result )=>{
        if (err){
            res.status(500).send( {message: "Unknown error", message: err} );
        }
        else{
            res.status(200).send ( {message: 'Product created', result: result} );
    }
    });
    }
}

function listPosts ( req, res){

    let search = req.params.search;

    let queryParam = {};

    if ( search ){
        queryParam = {
            $or :[
                { nameproduct: { $regex: search, $options: "i"  } },
                { category: { $regex: search, $options: "i"  } },
                { animal: {$regex: search, $options: "i"}}
            ]
        };
    }


let query = Post.find( queryParam ).sort('createdAt');

query.exec( (err, result)=>{
    
    if (err){
        res.status (500).send ({message: err});
    }else{
        res.status (200).send ({message: result});
    }

});

}

function findPost (req, res) {
    let id = req.params.id
    let query = Post.findById(id);

    query.exec((err, result) => {
        if(err){
            res.status(500).send({message: err});
        }else{
            res.status(200).send(result);
        }
    });
}

function updatePost(req, res){
    let id = req.params.id;
    let data = req.body;
    data.user = req.email;

    Post.findByIdAndUpdate(id, data, {new: true}, (err, result) => {
        if(err){
            res.status(500).send({message: err});
            console.log("Hola");
        }else{
            res.status(200).send({message: 'Post updated', result: result});
        }
    })
}

function deletePost(req, res){
    let id = req.params.id;

    Post.findByIdAndDelete (id, (err, result)=>{

        if(err){
            res.status(500).send ({message: err});
        }else{
            res.status(200).send ({message: "Post deleted", message: result});
        }
    })
}

module.exports = {savePost, listPosts, findPost, updatePost, deletePost};

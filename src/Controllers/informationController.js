let Info = require('../models/information') ;

function saveInfo( req, res){

    if(Info){
        let myInfo = new Info( req.body );
        //myInfo.user = req.data.email;

    myInfo.save( ( err, result )=>{
        if (err){
            res.status(500).send( {message: "Unknown error", message: err} );
        }
        else{
            res.status(200).send ( {message: 'info save', result: result} );
    }
    });
    }
}



module.exports = {saveInfo};
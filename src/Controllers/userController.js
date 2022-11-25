const User = require('../models/users');
const bcrypt = require('bcrypt');

async function SaveUser ( req, res ) {
    
    let Users = new User ( req.body );

    const userFound = await User.findOne({
        email: Users.email
    });
    if(userFound != null){
        res.status(403).send({message: 'User is already registered'})
        return;
    }else{
        const salt = await bcrypt.genSalt(10);
        Users.password = await bcrypt.hash(Users.password, salt)
        Users.save( (err, result)=>{
            if (err){
                res.status(500).send({message: err} );
            }
            else{
                res.status(200).send({message: result});
            }
        })
    }
    
}


module.exports= {SaveUser};
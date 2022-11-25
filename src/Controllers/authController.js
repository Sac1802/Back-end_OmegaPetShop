const jwt = require ('jsonwebtoken');
const User= require ('../models/users');
const bcrypt = require('bcrypt');


async function login (req, res) {

    const user = await User.findOne({
        email: req.body.email
    });

    if(user == null){
        res.status(403).send({message: 'Invalid Credentials'});
        return;
    }else{

        const validPassword = await bcrypt.compare(req.body.password, user.password)

        if(!validPassword){
            
            res.status(403).send({message: 'Invalid Password'})
            return;
        }else{
                jwt.sign({user: user}, 'secretKey', {expiresIn: '1h'} ,(err, token) => {
                    if (err){
                        res.json({message: 'error'})
                    } else{
                        if(user.status === 'Vendedor'){
                            res.status(200).send({ message: 'Authentication success vendedor',token:token });
                        }else{
                            res.status(200).send({ message: 'Authentication success',token:token });   
                        }
                    }
                });
        }
        
    }
}
function profile(req, res) {
    jwt.verify(req.token, "secretKey", (error, authData) => {
        if (error) {
          res.json({ message: error, isValid: false, user: authData });
        } else {
          res.json({ isValid: true, user: authData })
        }
      });
}


function verifyToken(req, res, next) {
            const bearerHeader = req.headers["authorization"];

        if (typeof bearerHeader !== "undefined") {
            const bearerToken = bearerHeader.split(" ")[1];
            req.token = bearerToken;
            next();
        } else {
            res.sendStatus(403);
        }
    }


module.exports = {
    login,
    profile,
    verifyToken
}

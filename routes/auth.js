var expressJWT = require('express-jwt');
var jwt = require('jsonwebtoken');
var secret = require('../secret');
var auth = {
    authenticate: function (req,res) {
        var collection = req.db.collection('adminDetails');
        collection.findOne({username:req.body.userName,password:req.body.password},function (err,data) {
            if(!err && data){
                var  token = jwt.sign({username:req.body.userName},secret.secret,{ expiresIn: 36000 });
                res.send({
                    "msg": "Authentication Succesfull",
                    "token": token,
                    "expiresAt" : Math.floor(Date.now()/1000) + 35000
                });
            }
            else if(data==null){
                res.send({
                    "msg": "Authentication Failed, User Not Found"
                });
            }
        });
     }
};

module.exports = auth;
var shortID = require('shortid');

var db = require('../db');

module.exports = function(req, res, next){
    if(!req.signedCookies.sessionId){
        var sessionId = shortID.generate();
        res.cookie('sessionId', sessionId, {
            signed: true
        })

        db.get('sessions').push({
            id: sessionId
        }).write()
    }else{
        // var tong = 0;
        // var cart = db.get('sessions')
        // .find({ id: req.signedCookies.sessionId })
        // .get('cart')
        // .value();
    
        // if(cart){
        //     for(var i of Object.entries(cart)){
        //         if(i[1]){
        //             tong += i[1];
        //         }
        //     }
        // }
    
        // res.locals.cart = tong;
    
        next();
    }
}

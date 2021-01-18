var md5 = require('md5');

var User = require('../models/user.model');

module.exports.login = function(req, res){
    res.render('auth/login',{
        csrfToken: req.csrfToken() 
    });
}

module.exports.postLogin = async function(req, res){
    var email = req.body.email;
    var password = req.body.password;

    var user = await User.find({ email: email });
    user = user[0];

    if(!user){
        res.render('auth/login',{
            errors: [
                'User does not exist.'
            ],
            values: req.body
        })
        return;
    }

    var hashedPassword = md5(password);

    if(user.password !== hashedPassword){
        res.render('auth/login',{
            errors: [
                'Wrong password.'
            ],
            values: req.body
        })
        return;
    }
    
    res.cookie('userId', user._id, {
        signed: true
    })
    res.redirect('/users');
}
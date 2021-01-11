var db = require('../db');
var shortID = require('shortid');

module.exports.index = function(req, res){
    res.render('users/index',{
        users : db.get('users').value()
    });
}

module.exports.search = function(req, res){
    var q = req.query.q;
    var marchedUesrs = db.get('users').value().filter(function(user){
        return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
    })

    res.render('users/index',{
        users : marchedUesrs
    });
}

module.exports.create = function(req, res){
    res.render('users/create');
}

module.exports.Postcreate = function(req, res){
    req.body.id = shortID.generate();

    db.get('users').push(req.body).write();
    res.redirect('/users');
}

module.exports.view = function(req, res){
    var id = req.params.user_id;
    console.log(res.locals);
    var user = db.get('users').find({ id: id }).value();
    res.render('users/view',{
        user : user
    })
}

// module.exports = {
//     a: 1,
//     b: 2
// };

// module.exports.a = 1;
// module.exports.b = 2;
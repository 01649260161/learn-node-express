var Product = require('../models/product.model');

module.exports.index = async function(req, res, next){
    // var page = parseInt(req.query.page) || 1; // n
    // var perPage = 9; // x

    // var start = (page - 1) * perPage;// (n - 1) * x
    // var end = page * perPage;

    // var drop = (page - 1) * perPage;

    // res.render('products/index',{
    //     // products : db.get('products').value().slice(start,end)
    //     products : db.get('products').drop(drop).take(perPage).value()
    // });

    var products = await Product.find()
    res.render('products/index', {
        products: products
    });
}
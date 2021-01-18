var mongoose = require('mongoose');

const sessionSchema = new mongoose.Schema({
    cart: Object
  });

  var Session = mongoose.model('Session', sessionSchema, 'sessions');

  module.exports = Session;
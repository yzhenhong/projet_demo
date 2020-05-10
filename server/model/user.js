var mongoose = require('mongoose');
var userSchema = require('./../schema/user.js');
const userModel = mongoose.model('user',userSchema,'user');
module.exports = userModel;

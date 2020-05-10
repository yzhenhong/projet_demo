var mongoose = require('mongoose');
var accountSchema = require('./../schema/account.js');
const accountModel = mongoose.model('account',accountSchema,'account');
module.exports = accountModel;

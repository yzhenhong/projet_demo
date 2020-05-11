var mongoose = require('mongoose');
var earningsSchema = require('./../schema/earnings.js');
const earningsModel = mongoose.model('earnings',earningsSchema,'earnings');
module.exports = earningsModel;

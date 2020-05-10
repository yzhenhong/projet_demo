var mongoose = require('mongoose');
const Schema = mongoose.Schema;
const accountSchema = new Schema({
    username:String,
    password:String,
  },
  {
    collection: 'account',
    versionKey: false
  });
module.exports = accountSchema;
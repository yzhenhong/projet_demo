var mongoose = require('mongoose');
const Schema = mongoose.Schema;
const accountSchema = new Schema({
    userName:String,
    password:String,
  },
  {
    collection: 'account',
    versionKey: false
  });
module.exports = accountSchema;
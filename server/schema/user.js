var mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new Schema({
    name:String,
    sex:String,
    age:Number,
    identityCard:String,
    birthday:String
  },
  {
    collection: 'user',
    versionKey: false
  });
module.exports = userSchema;
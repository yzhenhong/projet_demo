var mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new Schema({
    hospitalName:String,
    userName:String,
    jobTitle:String,
    tel:String,
    registrationTime:String,
  },
  {
    collection: 'user',
    versionKey: false
  });
module.exports = userSchema;
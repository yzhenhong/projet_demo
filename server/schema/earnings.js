var mongoose = require('mongoose');
const Schema = mongoose.Schema;
const earningsSchema = new Schema({
    province:String,
    city:String,
    userName:String,
    wechatId:String,
    revenueType:String,
    incomeAmount:String,
    acquisitionTime:String,
    issuingState:String,
    provideTime:String,
  },
  {
    collection: 'earnings',
    versionKey: false
  });
module.exports = earningsSchema;
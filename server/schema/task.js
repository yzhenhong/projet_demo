var mongoose = require('mongoose');
const Schema = mongoose.Schema;
const taskSchema = new Schema({
    taskName:String,
    hospitalName:String,
    deadline:String,
    taskState:String,
    receiver:String,
  },
  {
    collection: 'task',
    versionKey: false
  });
module.exports = taskSchema;
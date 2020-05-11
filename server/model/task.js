var mongoose = require('mongoose');
var taskSchema = require('./../schema/task.js');
const taskModel = mongoose.model('task',taskSchema,'task');
module.exports = taskModel;

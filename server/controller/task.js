var taskModel = require('./../model/task.js');

// 添加任务
function addTask (data) {
    return new Promise((resolve,reject)=>{
      let taskName = data.taskName
          taskModel.findOne({taskName}).then(res=>{
        // console.log(res)
        if(res){
          reject("该任务已经存在")
        }else{
          // return taskModel(data).save()
          taskModel(data).save()
          .then(
            res=>{
              resolve(res);
            },
            err=>{
              reject(err);
            }
          )
        }
          })
      })
  }


// 任务列表
function taskList (data) {
    return new Promise((resolve,reject)=>{
        taskModel.find(data)
        .then(
          res=>{
            resolve(res);
          },
          err=>{
            reject(err);
          }
        )
      })
  }


module.exports = {
    addTask,
    taskList
}
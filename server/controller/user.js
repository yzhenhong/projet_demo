var userModel = require('./../model/user.js');


// 添加用户
function addUser (data) {
    return new Promise((resolve,reject)=>{
      let userName = data.userName
          userModel.findOne({userName}).then(res=>{
        // console.log(res)
        if(res){
          reject("该用户已经存在")
        }else{
          // return userModel(data).save()
          userModel(data).save()
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


// 用户列表
function userList (data) {
    return new Promise((resolve,reject)=>{
        userModel.find(data)
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
    addUser,
    userList
}
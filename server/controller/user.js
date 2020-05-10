var userModel = require('./../model/user.js');

function userList () {
  return new Promise((resolve, reject)=>{
    userModel.find()
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

function addUser () {
  return new Promise((resolve, reject)=>{
    userModel({name:'杨振宏'}).save()
      .then(
        res=>{
          resolve(res);
        },
        err=>{
          reject(err);
        }
      )
  })
  // return new userModel({name:'杨振宏'}).save();
}

module.exports = {
  userList,
  addUser
}
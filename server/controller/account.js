var accountModel = require('./../model/account.js');

// 添加账号
function addAccount (data) {
  return new Promise((resolve,reject)=>{
    let username = data.username
		accountModel.findOne({username}).then(res=>{
      console.log(res)
      if(res){
        reject("该账号已经存在")
      }else{
        // return accountModel(data).save()
        accountModel(data).save()
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
  // return new Promise((resolve, reject)=>{
  //   accountModel(data).save()
  //     .then(
  //       res=>{
  //         resolve(res);
  //       },
  //       err=>{
  //         reject(err);
  //       }
  //     )
  // })
}

// 登录账号
function loginAccount (data) {
  return new Promise((resolve,reject)=>{
		accountModel.findOne(data)
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
  addAccount,
  loginAccount
}
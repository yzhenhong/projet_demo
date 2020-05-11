var earningsModel = require('./../model/earnings.js');

// 添加收益
function addEarnings (data) {
    return new Promise((resolve,reject)=>{
      let earningsName = data.earningsName
          earningsModel.findOne({earningsName}).then(res=>{
        // console.log(res)
        if(res){
          reject("该收益已经存在")
        }else{
          // return earningsModel(data).save()
          earningsModel(data).save()
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


// 收益列表
function earningsList (data) {
    return new Promise((resolve,reject)=>{
        earningsModel.find(data)
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
    addEarnings,
    earningsList
}
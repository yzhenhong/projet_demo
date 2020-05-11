var router=require('koa-router')(),
    account = require('../controller/account');


router.get('/',async (ctx)=>{
    ctx.body='account'
})



router.post('/add_account',async (ctx)=>{
  // console.log(ctx.request.body);
  await account.addAccount(ctx.request.body).then(res=>{
    // console.log('res',res)
    ctx.body= res
  }).catch(err=>{
      // console.log('err',err)
      ctx.body= err
  })
})

router.post('/login_account',async (ctx)=>{
  // console.log(ctx.request.body);
  await account.loginAccount(ctx.request.body).then(res=>{
    // console.log('res',res)
    if(res){
      ctx.status = 200
      res._doc.token = 'token123'
      ctx.body = {
        msg:"ok",
        code: 0,
        data:res
      }
    } else {
      ctx.status = 200
      ctx.body = {
        msg:"账号密码错误,请检查你的账号再重试！",
        code: -1,
        data: null
      }
    }
  }).catch(err=>{
    // console.log('err',err)
    ctx.body= err
  })
})

module.exports=router.routes();
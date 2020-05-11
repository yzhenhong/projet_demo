var router=require('koa-router')(),
    user = require('../controller/user');


router.get('/',async (ctx)=>{
    ctx.body='user'
})



router.post('/add_user',async (ctx)=>{
  // console.log(ctx.request.body);
  await user.addUser(ctx.request.body).then(res=>{
    // console.log('res',res)
    ctx.body= res
  }).catch(err=>{
      // console.log('err',err)
      ctx.body= err
  })
})

router.post('/usr_list',async (ctx)=>{
  // console.log(ctx.request.body);
  await user.userList(ctx.request.body).then(res=>{
    // console.log('res',res)
    ctx.status = 200
    ctx.body = {
      msg:"ok",
      code: 0,
      data:res
    }
  }).catch(err=>{
    // console.log('err',err)
    ctx.body= err
  })
})

module.exports=router.routes();
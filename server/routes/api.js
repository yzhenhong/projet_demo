var router=require('koa-router')(),
    koaBody = require('koa-body')({ // 处理form-data的post请求
        multipart: true,
    });
const rou = require('./rou');
const account = require('./../controller/account');

router.get('/',async (ctx)=>{
    ctx.body='api'
})



router.post('/add/account',async (ctx)=>{
  // console.log(ctx.request.body);
  await account.addAccount(ctx.request.body).then(res=>{
    // console.log('res',res)
    ctx.body= res
  }).catch(err=>{
      // console.log('err',err)
      ctx.body= err
  })
})

router.post('/login/account',async (ctx)=>{
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
    console.log('err',err)
  })
})
router.get('/user/menuList',async (ctx)=>{
  ctx.status = 200
  let data = {
    userId: 'userid123',
    menuList: rou.rou
  }
  ctx.body = {
    msg:"ok",
    code: 0,
    data
  }
})


router.post('/user/login',async (ctx)=>{
  console.log(ctx.request.body);
  ctx.body=ctx.request.body;
})
router.get('/user/info',async (ctx)=>{
  console.log(ctx.request.body);
  ctx.body=ctx.request.body;
})


module.exports=router.routes();
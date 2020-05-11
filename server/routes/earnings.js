var router=require('koa-router')(),
    earnings = require('../controller/earnings');


router.get('/',async (ctx)=>{
    ctx.body='earnings'
})



router.post('/add_earnings',async (ctx)=>{
  // console.log(ctx.request.body);
  await earnings.addEarnings(ctx.request.body).then(res=>{
    // console.log('res',res)
    ctx.body= res
  }).catch(err=>{
      // console.log('err',err)
      ctx.body= err
  })
})

router.post('/earnings_list',async (ctx)=>{
  // console.log(ctx.request.body);
  await earnings.earningsList(ctx.request.body).then(res=>{
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
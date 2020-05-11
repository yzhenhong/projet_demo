var router=require('koa-router')(),
    task = require('../controller/task');


router.get('/',async (ctx)=>{
    ctx.body='task'
})



router.post('/add_task',async (ctx)=>{
  // console.log(ctx.request.body);
  await task.addTask(ctx.request.body).then(res=>{
    // console.log('res',res)
    ctx.body= res
  }).catch(err=>{
      // console.log('err',err)
      ctx.body= err
  })
})

router.post('/task_list',async (ctx)=>{
  // console.log(ctx.request.body);
  await task.taskList(ctx.request.body).then(res=>{
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
var router=require('koa-router')(),
    koaBody = require('koa-body')({ // 处理form-data的post请求
        multipart: true,
    });

const user = require('./../controller/user');

router.get('/',async (ctx)=>{
    ctx.body='business'
})

router.post('/saveuser',async (ctx)=>{
    await user.addUser(ctx.request.body).then(res=>{
        // console.log('res',res)
        ctx.body= res
    }).catch(err=>{
        // console.log('err',err)
        ctx.body= err
    })
})


module.exports=router.routes();
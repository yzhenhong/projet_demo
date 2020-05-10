var router=require('koa-router')(),
    koaBody = require('koa-body')({ // 处理form-data的post请求
        multipart: true,
    }),
    mongoose = require('mongoose');

router.get('/',async (ctx)=>{

    ctx.body='declare'

})

router.get('/user',async (ctx)=>{

    ctx.body='declare-user'
})


module.exports=router.routes();
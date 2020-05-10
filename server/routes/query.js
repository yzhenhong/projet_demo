var router=require('koa-router')(),
    koaBody = require('koa-body')({ // 处理form-data的post请求
        multipart: true,
    });

const user = require('./../controller/user');

router.get('/',async (ctx)=>{

    ctx.body='query'

})

router.get('/user',async (ctx)=>{
    await user.userList().then(res=>{
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
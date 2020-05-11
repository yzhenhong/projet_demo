const Koa=require('koa'),
      router=require('koa-router')(),
      koaBody = require('koa-body')({ // 处理form-data的post请求
        multipart: true,
      }),
      mongoose = require('mongoose');

//引入路由子模块
var account=require('./routes/account.js');
var user=require('./routes/user.js');
var task=require('./routes/task.js');
var earnings=require('./routes/earnings.js');

new Promise((resolve, reject)=>{
	// 连接数据库
	mongoose.connect('mongodb://localhost:27017/crowdSourcing',{ useNewUrlParser: true,useUnifiedTopology: true },(error)=>{
    if(error){
      console.log(error,'数据库连接失败');
    }else{
      console.log('数据库连接成功');
      resolve();
    }
	})
})
.then(()=>{
  var app=new Koa();

  //配置post koaBody的中间件
  app.use(koaBody)
  router.get('/',async (ctx)=>{
      ctx.body='index'
  })
  // 配置子路由-层级路由
  router.use('/api/account',account);
  router.use('/api/user',user);
  router.use('/api/task',task);
  router.use('/api/earnings',earnings);

  //启动路由
  app.use(router.routes()).use(router.allowedMethods());

  app.listen(3000,'192.168.0.107', (error)=>{
		if(error){
			console.log('服务错误');
		}else{
			console.log('服务启动成功：http://192.168.0.107:3000');
		}
	})    
})
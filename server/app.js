const Koa=require('koa'),
      router=require('koa-router')(),
      views = require('koa-views'),
      // path=require('path'),
      // render = require('koa-art-template'),
      // bodyParser = require('koa-bodyparser'), // 处理x-www-form-urlencoded的post请求
      koaBody = require('koa-body')({ // 处理form-data的post请求
        multipart: true,
      }),
      static = require('koa-static'),
      mongoose = require('mongoose');

//引入路由子模块
var query=require('./routes/query.js');
var declare=require('./routes/declare.js');
var business=require('./routes/business.js');
var api=require('./routes/api.js');

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

  //配置ejs模板引擎中间件  --第三方中间件
  // app.use(views('views', { map: {html: 'ejs' }}));   //这样配置也可以  注意如果这样配置的话 模板的后缀名是.html
  app.use(views('views',{
    extension:'ejs'  /*应用ejs模板引擎*/
  }))

  //配置 koa-art-template模板引擎
  // render(app, {
  //   root: path.join(__dirname, 'views'),   // 视图的位置
  //   extname: '.html',  // 后缀名
  //   debug: process.env.NODE_ENV !== 'production'  //是否开启调试模式
  // });

  //http://localhost:3000/css/basic.css  首先去static目录找 ，如果能找到返回对应的文件，找不到 next()
  //配置静态web服务的中间件
  //app.use(static('./static'));
  app.use(static(__dirname+'/static')); //koa静态资源中间件可以配置多个
  app.use(static(__dirname+'/public'));

  //配置post bodyparser的中间件
  // app.use(bodyParser());
  //配置post koaBody的中间件
  app.use(koaBody)


//   app.use(async (ctx, next) => {                    // 记录服务器响应时间的中间件
//     console.log('1、这是第一个中间件01');
//     let stime = new Date().getTime();               // 记录当前时间戳
//     await next();                                   // 事件控制权中转
//     let etime = new Date().getTime();               // 所有中间件执行完成后记录当前时间
//     console.log(`请求地址: ${ctx.path}，响应时间：${etime - stime}ms`);
//     console.log('5、匹配路由完成以后又会返回来执行中间件');
//   });
  
//   // 写一个中间件 配置公共的信息
//   app.use(async (ctx,next)=>{
//     console.log('2、这是第二个中间件02');
//     ctx.state.userinfo='杨振宏';
//     await next();/*继续向下匹配路由*/
//     if(ctx.status==404){   /*如果页面找不到*/
//       ctx.status = 404;
//       ctx.body="这是一个 404 页面"
//     }else{
//         console.log(ctx.url);
//     }
//     console.log('4、匹配路由完成以后又会返回来执行中间件');
//   })

    // 写一个中间件 配置公共的信息
  app.use(async (ctx,next)=>{
    ctx.state.userinfo='杨振宏';
    await next();/*继续向下匹配路由*/
    if(ctx.status==404){   /*如果页面找不到*/
      ctx.status = 404;
      ctx.body="这是一个 404 页面"
    }else{
        // console.log(ctx.url);
    }
  })

  //配置路由
  router.get('/api/get',async (ctx)=>{
    // console.log('3、匹配到了这个路由');
    console.log(ctx)
    ctx.body='index';
  })
  router.post('/api/post',async (ctx)=>{
    // console.log('3、匹配到了这个路由');
    ctx.body=ctx.request.body;
  })

  //接收post提交的数据
  router.post('/doAdd',async (ctx)=>{
    console.log(ctx.request.body);
    ctx.body=ctx.request.body;  //获取表单提交的数据
  })

  router.get('/news',async (ctx)=>{
    let list=['11111','22222','33333'];
    let content="<h2>这是一个h2</h2>";
    let num=12;
    await ctx.render('news',{
        list:list,
        content:content,
        num:num
    })
  })

  // 配置子路由-层级路由
  router.use('/query',query);
  router.use('/declare',declare);
  router.use('/business',business);
  router.use('/api',api);

  //启动路由
  app.use(router.routes()).use(router.allowedMethods());

  // app.listen(3000, 'localhost', (error)=>{
  app.listen(3000,'192.168.0.107', (error)=>{
		if(error){
			console.log('服务错误');
		}else{
			// console.log('服务启动成功：http://localhost:3000');
			console.log('服务启动成功：http://192.168.0.107:3000');
		}
	})    
})
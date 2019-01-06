const Koa = require('koa');
const Router = require('koa-router');



const app = new Koa();

let home = new Router();
home.get('/jspang',async(ctx)=>{
  ctx.body= 'Home JSPang page';
}).get('/todo',async(ctx)=>{
  ctx.body = 'Home todo Page';
})

let page = new Router();

page.get('/jspang',async(ctx)=>{
  ctx.body= 'page JSPang page';
}).get('/todo',async(ctx)=>{
  ctx.body = 'page todo Page';
})
//父级路由
//装载所有子路由
let router = new Router();
router.use('/home',home.routes(),home.allowedMethods());
router.use('/page',page.routes(),page.allowedMethods());

//加载路由中间件
app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(3000, () => {
  console.log('starting at port 3000');
})
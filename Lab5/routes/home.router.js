const Router =require('@koa/router');

const router = new Router({
  prefix:'/home'
});

router.get('/',(ctx)=>{
    ctx.body='Hello'
});

router.post('/',ctx=>{
    ctx.body='Hellooo'
});

module.exports=router;




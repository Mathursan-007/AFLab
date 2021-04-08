const Koa =require('koa');

const HomeRoutes = require('./routes/home.router');
const PostRoutes = require('./routes/post.routes');
const bodyParser = require('koa-bodyparser')

//koa app
const app = new Koa();
const serve = require('koa-static');
//content-type:application/json

app.use(bodyParser());//registering body parser

app.use(HomeRoutes.routes())
    .use(HomeRoutes.allowedMethods());

 app.use(PostRoutes.routes())
     .use(PostRoutes.allowedMethods());

app.use(serve('public/'));

app.use(ctx=>{           //prefix:about
    ctx.body ='Hello World';
})

app.listen(3000,error=>{
    if(error){
        console.log(error);
        return;
    }
    console.log("App running on port 3000");
});




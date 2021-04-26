const Koa =require('koa');

const PostRoutes = require('./routes/post.routes');
const bodyParser = require('koa-bodyparser')
const cors = require('@koa/cors')

//koa app
const app = new Koa();
//content-type:application/json

app.use(cors());
app.use(bodyParser());//registering body parser

app.use(PostRoutes.routes())
    .use(PostRoutes.allowedMethods());


app.use(ctx=>{           //prefix:about
    ctx.body ='Hello World';
})

app.listen(3001,error=>{
    if(error){
        console.log(error);
        return;
    }
    console.log("App running on port 3001");
});


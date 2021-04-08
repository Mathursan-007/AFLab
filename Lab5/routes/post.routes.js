const Router = require('@koa/router');
const {getPost,createPost,getPosts,removePost,updatePost}  =require('../api/posts.api')


const router = new Router({
    prefix: '/posts'
});

router.get('/', async ctx => {

    ctx.body=await getPosts();

});

router.post('/', async ctx => {
    let post = ctx.request.body;
    post = await createPost(post);
    ctx.response.status = 201;
    ctx.body = post;
});

router.get('/:id', async ctx => { //id is a placeholder
    const id = ctx.params.id;
    ctx.body = await getPost(id);
});

router.put('/:id',async ctx=>{
    let post =ctx.request.body
    const id = ctx.params.id;
    ctx.body = await updatePost(id,post);
})

router.delete('/:id',async ctx=>{
    const id = ctx.params.id;
    await removePost(id);
    ctx.body="deleted";
})


module.exports=router;
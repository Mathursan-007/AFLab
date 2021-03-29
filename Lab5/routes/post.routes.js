const Router = require('@koa/router');
const {getPost,createPost,getPosts}  =require('../api/posts.api')


const router = new Router({
    prefix: '/posts'
});

router.get('/', ctx => {
    ctx.body = getPosts();
});

router.post('/', ctx => {
    let post = ctx.request.body;
    post = createPost(post);
    ctx.response.status = 201;
    ctx.body = post;
});

router.get('/:id', ctx => { //id is a placeholder
    const id = ctx.params.id;
    ctx.body = getPost(id);
});

module.exports=router;
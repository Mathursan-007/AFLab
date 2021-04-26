const uuid = require('uuid');

const {save,getById,getAll,removeById,update}=require('../dal/posts.dao');

async function createPost({id,name,description}){
    let post={
        name,
        description,
        id,
        postedDate:new Date()
    }

    return await save(post);
}

async function getPosts(){
    return await getAll();
}

async function getPost(id){
    return await getById(id);
}

async function removePost(id){
    return await removeById(id)
}

async function updatePost(id,{name,description}){
    let post={
        id,
        name,
        description,
        postedDate:new Date()
    }
    return await update(post);
}

module.exports={
    createPost,
    getPosts,
    getPost,
    removePost,
    updatePost
}

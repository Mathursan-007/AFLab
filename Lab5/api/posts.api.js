
const uuid = require('uuid')
//universal unique identifier(uuid)

var posts = new Map();

let createPost =function({name,description}){

    const post= {
        name,
        description,
        id: uuid.v4(),
        date: new Date()
    }
        posts.set(post.id,post);
    return post;
}

let getPosts = function (){
    return [...posts.values()];
}

let getPost =function (id){
   return posts.get(id);
}

module.exports={
    createPost,
    getPosts,
    getPost
};
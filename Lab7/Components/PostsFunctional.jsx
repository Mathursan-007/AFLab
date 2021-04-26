import React, {useEffect, useState} from 'react';
import PostListItem from "./PostListItem";
import Post from "./Post";



function PostsFunctional(props){


    const [post,setPost] = useState(null);//the use state returns the state variable and its setter

    useEffect(()=>{    // Similar to componentDidMount and componentDidUpdate:(componentDidMount, componentDidUpdate, and componentWillUnmount combined)
       console.log("Mount and update effect from hook");
       return () => console.log("Unmount effect from hook"); //will be executed before unmounting
    })

    const {posts} =props;

    return(
        <div>
            <table border={1}>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>SelectPost</th>
                </tr>
                </thead>
                <tbody>
                {posts.map(post=>{
                    return <PostListItem key={post.id} post={post} selectPost={setPost}/>
                })}
                </tbody>
            </table>
            <div>
                {post ? <Post post={post}/>:' '}
            </div>
        </div>
    )

}

export default PostsFunctional;
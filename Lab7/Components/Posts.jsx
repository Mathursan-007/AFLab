import React from "react";
import PostListItem from "./PostListItem";
import Post from "./Post";

class Posts extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            post:null
        };
    }

    selectPost(post){
        this.setState({post:post})
    }

    render() {
        const {posts}=this.props;
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
                        return <PostListItem key={post.id} post={post} selectPost={(post)=>this.selectPost(post)}/>
                    })}
                    </tbody>
                </table>
                <div>
                    {this.state.post ? <Post post={this.state.post}/>:' '}
                </div>
            </div>
        )
    }

}

//key in tr(post list item) is to help react uniquely identify the element if thr any changes

export default Posts;
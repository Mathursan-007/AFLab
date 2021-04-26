import React from 'react';
import Posts from './Posts';
import {Link, Route, BrowserRouter as Router, Switch} from "react-router-dom";
import AddPost from "./AddPost";
import PostsFunctional from "./PostsFunctional";

// const posts = [
//     {
//         id: 1,
//         name: 'React',
//         description: 'Best UI library'
//     }, {
//         id: 2,
//         name: 'Node',
//         description: 'Server side JS'
//     }
// ];

export default class PostsHolder extends React.Component{

    constructor(props) {
        super(props);
        this.state={
            posts:[],
        }
    }

    addNewPost({id,name,description}){
        //posts.push({id:posts.length+1,name,description})
        fetch('http://localhost:3001/posts',{
            method:'POST',
            headers:{
                'Content-type':'application/json',
            },
            body:JSON.stringify({
                id:id.toString(),
                name:name,
                description:description
            })
        })
            .then(res=>(res.json()))
            .then(newPost=>{
                this.setState({
                    cards:[...this.state.posts,newPost]
                })
            }).catch(e=>{
            console.log(e)
        })
    }

    componentDidMount() {


        fetch('http://localhost:3001/posts')
            .then(res=>res.json())
             .then(posts=>{
                 this.setState({posts:posts})
             })

    }

    render() {
        return(
            <div>
                <Switch>
                        <Route exact path={"/posts"}>
                            <PostsFunctional posts={this.state.posts}/>
                        </Route>
                        <Route exact path={"/posts/add"}>
                            <AddPost id={this.state.posts.length} save={this.addNewPost}/>
                        </Route>
                </Switch>
                <Link to="/posts/add">Add</Link><br/>
            </div>
         )
    }

}
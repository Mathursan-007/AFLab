import React from "react";
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import UserContext from "./UserContext";

class AddPost extends React.Component{

    constructor(props) {
        super(props);
        this.state={
            name:'',
            description:''
        }

    }

    onChange(event){
        const {name,value}=event.target;
        this.setState({[name]:value})//[] is to specify the name attribute of form
    }

    render() {
        const {save,id}=this.props

        return(
             <div>
                 <div>{this.context.name}</div>
                 <Link to="/posts">Posts</Link>
                 <form>
                     <div>
                         <label>Name:</label>
                         <input type={"text"} name={"name"} value={this.state.name} onChange={(event => {this.onChange(event)})}/>
                     </div>
                     <div>
                         <label>Description:</label>
                         <input type={"text"} name={"description"} value={this.state.description} onChange={(event => {this.onChange(event)})}/>
                     </div>
                     <div>
                         <button onClick={event => {
                             event.preventDefault();
                             save({id:id+1,name:this.state.name,description:this.state.description});
                              this.setState({name:'',description:''})
                         }}>Save</button>
                     </div>
                 </form>
             </div>
        )
    }


}

AddPost.contextType=UserContext;//The contextType property on a class can be assigned a Context object
//here the this.context is the context value that is passed and inside it the name property is what we want to display(this.context.name)
export default AddPost
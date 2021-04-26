import React from "react";
import PostsHolder from "./Components/PostsHolder";
import {BrowserRouter as Router, Switch, Route, Link,Redirect} from "react-router-dom";
import UserContext from "./Components/UserContext";

class App extends React.Component{

    constructor(props) {
        super(props);
        this.state={
            user:''
        }
    }

    componentDidMount() {

        this.setState({
            user:{
                name:'admin'
            }
        })

    }
//value of UserContext.provider acts as props value we pass normally

    render() {
        return(
            <Router>
                <Switch>
                    <Route path={"/posts"}>
                        <UserContext.Provider value={this.state.user}>
                            <PostsHolder/>
                        </UserContext.Provider>
                    </Route>
                    <Redirect to={"/posts"}/>
                </Switch>
            </Router>
        )
    }

}

export default App;
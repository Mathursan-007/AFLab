import React from 'react';


// Context provides a way to pass data through the component tree without having to pass props down manually at every level
//is makes the value as global value deep into the component tree

const user = {
    name:'app-user'
}

const UserContext = React.createContext(user);//creating a context with default value,it can be anything even null if we are not going to use the default value

export default UserContext;
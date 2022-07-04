import React from "react";
import { AuthContext } from "../../providers/auth";

export const IsAutheticed = () => {
    const {user, setUser} = React.useContext(AuthContext)
    if(user.hasOwnProperty('token') || localStorage.getItem('token').length > 1){
        return true;
    }else{
        return false;
    }
    
};
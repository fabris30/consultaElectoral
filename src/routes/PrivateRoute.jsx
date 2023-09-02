import React, { useState } from "react";
import { Navigate} from "react-router-dom";

const PrivateRoute =(props)=>{
 const {canActivate,redirecPath="/", component} = props;
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    console.log(canActivate)
    let componente;
    if(!canActivate){
      window.location.href="/"
      
    }else{
      componente=component;
    }
    return componente;
}

export default  PrivateRoute;
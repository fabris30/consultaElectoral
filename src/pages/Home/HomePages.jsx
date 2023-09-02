import React, { Fragment, useEffect } from "react";
import LoginComponent from "../../components/LoginComponent";
import { refreshToken } from "../../Api/autenticacion";


const HomePages = () => {
   /* useEffect(()=>{
        refreshToken();
    },[])*/

    return (
        <Fragment>
            <div className="container">
                <LoginComponent />
            </div>
        </Fragment>
    )
}
export default HomePages;
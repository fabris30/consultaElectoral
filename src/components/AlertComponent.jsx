import React, { Fragment } from "react";

const  AlertComponent =(props)=>{
    const {mensaje,mostraralert,styleGrup}=props;
    return(
        <Fragment>
        { mostraralert && <div className={`alert  ${styleGrup}`} role="alert">
               {mensaje}
          </div>}
        </Fragment>
    )
}
export default AlertComponent;
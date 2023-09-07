import React, { Fragment } from "react";
import style from '../scss/Header.module.scss';
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
const HeaderComponent = () => {
 const cerarSesion = () =>{
      Cookies.remove('token')
 }
    return (
        <Fragment>
            
            <header className={style.header}>
            <div className={style.logo}>
                     <img  src='../../Img/logo.png' alt="LOGOJFL"/>
             </div>
                {window.location.pathname !='/' ?  <nav>
           
                    <a href="/registro" className={style.nav}>Registro</a >
                    <a href="/consulta" className={style.nav}>Consulta</a>
                    <a href="/conteo" className={style.nav}>Conteo</a >
                
                    <a href="/" className={style.nav} onClick={cerarSesion}>Cerrar sesion</a>
                </nav>:null}
            </header>

        </Fragment>
    )
}
export default HeaderComponent;
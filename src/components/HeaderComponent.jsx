import React, { Fragment, useState } from "react";
import style from '../scss/Header.module.scss';
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import { Icon } from "@iconify/react";
const HeaderComponent = () => {

    const [menu,setMenu]=useState(false)
 const cerarSesion = () =>{
      Cookies.remove('token')
 }
    return (
        <Fragment>
            
        <header >
        {window.location.pathname !='/' ?  <div className={style.header}>

       
            <div className={style.logo}>
                     <img  src='../../Img/logo.png' alt="LOGOJFL"/>
            <nav className={` d-flex flex-column ${style.navmovil} ${ menu ? style.active : null}`}>
           
                    <a href="/registro" className={style.nav}>Registro</a >
                    <a href="/consulta" className={style.nav}>Consulta</a>
                    <a href="/conteo" className={style.nav}>Conteo</a >
                
                    <a href="/" className={style.nav} onClick={cerarSesion}>Cerrar sesion</a>
                </nav> 
             </div>
               
                <div>
                <div className= {`d-block d-md-none ${style.iconmv}`} onClick={()=>{setMenu(!menu)}} >
                    <Icon icon='mdi:account-details' />
           
                </div>
               <nav className="d-none d-md-block">
           
                    <a href="/registro" className={style.nav}>Registro</a >
                    <a href="/consulta" className={style.nav}>Consulta</a>
                    <a href="/conteo" className={style.nav}>Conteo</a >
                
                    <a href="/" className={style.nav} onClick={cerarSesion}>Cerrar sesion</a>
                </nav>
                </div>
                </div>:
                 <div className={style.headerlogin}>
                     <div className={`${style.logo} mb-0`}>
                        <img  src='../../Img/logo.png' alt="LOGOJFL"/>
                     </div>
                 </div>
                }
               
            </header>

        </Fragment>
    )
}
export default HeaderComponent;
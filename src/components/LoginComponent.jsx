import React, { Fragment, useEffect, useState } from "react";
import style from '../scss/Login.module.scss';
import {getLogin, refreshToken}   from "../Api/autenticacion";
import Cookies from 'js-cookie';
import AlertComponent from "./AlertComponent";
const LoginComponent = () => {

    const [username, setUsername] = useState('');
    const [ password, setPassword] = useState('');
    const [alerta, setAlerta] = useState('');
    const [mostraralert, setMostraralert] = useState(false);
    const handleLogin = () => {
   
          
           setTimeout(() => {
            setMostraralert(false);
          }, 3000); 
      
        getLogin(username,password).then((response) =>{
            Cookies.set('token', response.data.token, { expires: response.data.expiresIn }); 
            window.location.href='/consulta';
           
          })
          .catch(error => {
            // Manejar el error aquí
            if (error.response) {
              // Error de respuesta del servidor
              console.log('Código de estado:', error.response.status);
              if(error.response.status===403){  
                 setAlerta( error.response.data.error);
                 setMostraralert(true);
                }
            } else if (error.request) {
              // Error de solicitud (por ejemplo, no se pudo hacer la solicitud al servidor)
              console.error('Error de solicitud:', error.request);
            } else {
              // Otros errores
              console.error('Error:', error.message);
            }
            
          });
    };
    

     console.log(alerta)
   
    return (
        <Fragment> 
            <div className="d-flex justify-content-center">
            <AlertComponent mensaje={alerta} mostraralert={mostraralert} styleGrup='alert-danger text-center w-50' />

            </div>
            <div className={style.loginContainer}>
                <form className={style.login}>
                    <h2 className="text-white">Login</h2>
                    <div className='mb-3 '>
                        <label
                            htmlFor="usuario"
                            className="form-label text-white">User</label>
                        <input
                            type="text"
                            className={'form-control'}
                            id="usuario"
                            onChange={(e) => setUsername(e.target.value)} />
                    </div>
                    <div className={'mb-3'}>
                        <label
                            htmlFor="password"
                            className="form-label text-white">Password</label>
                        <input
                            type="password"
                            className={'form-control'}
                            id="password"
                            onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className="py-4">
                        <button type="button" onClick={handleLogin} className="btn btn-primary w-100">Continue</button>
                    </div>

                </form>
            </div>



        </Fragment>

    )
}
export default LoginComponent;
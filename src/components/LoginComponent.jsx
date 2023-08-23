import React, { Fragment } from "react";
import style from '../scss/Login.module.scss';
const LoginComponent = () => {

    return (
        <Fragment>

            <div className={style.loginContainer}>
                <form className={style.login}>
                    <h2>Login</h2>
                    <div className='mb-3'>
                        <label
                            htmlFor="usuario"
                            className="form-label">User</label>
                        <input
                            type="text"
                            className={'form-control'}
                            id="usuario" />
                    </div>
                    <div className={'mb-3'}>
                        <label
                            htmlFor="password"
                            className="form-label">Password</label>
                        <input
                            type="password"
                            className={'form-control'}
                            id="password" />
                    </div>
                    <div className="py-4">
                        <button type="submit" className="btn btn-primary w-100">Continue</button>
                    </div>

                </form>
            </div>



        </Fragment>

    )
}
export default LoginComponent;
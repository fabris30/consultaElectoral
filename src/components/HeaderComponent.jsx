import React, { Fragment } from "react";
import style from '../scss/Header.module.scss';
import { NavLink } from "react-router-dom";
const HeaderComponent = () => {
    return (
        <Fragment>
            <header className={style.header}>
                <div>

                </div>
                <nav>
                    <a href="/registro" className={style.nav}>Registro</a >
                    <a href="/consulta" className={style.nav}>Consulta</a>
                </nav>
            </header>
        </Fragment>
    )
}
export default HeaderComponent;
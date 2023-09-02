import React, { Fragment } from "react";
import style from '../../../scss/Resultado.module.scss';
const ResultadoComponent = (props) => {
    return (
        <Fragment>
            <div className="container">
                <div className={style.cantidad}>
                    <p>Cantidad de electores </p>
                    <span>{props.cantidad}</span>
                </div>
            </div>

        </Fragment>
    )
}
export default ResultadoComponent;
import React, { Fragment, useEffect } from "react";
import style from '../../../scss/Resultado.module.scss';
const ResultadoComponent = (props) => {
   
    const cantidadreal = props.cantidad.toLocaleString();
    return (
        <Fragment>
            <div className="container">
                <div className={style.cantidad}>
                    <p>Cantidad de electores </p>
                    <span>{cantidadreal}</span>
                </div>
            </div>

        </Fragment>
    )
}
export default ResultadoComponent;
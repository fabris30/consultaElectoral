import React, { Fragment, useState } from "react";
import style from '../../../scss/Filter.module.scss';
const FilterComponent = (props) => {
    const { nombre } = props;
    const [opcionSeleccionada, setOpcionSeleccionada] = useState('');

    const handleOpcionChange = (event) => {
        setOpcionSeleccionada(event.target.value);
    };
    return (

        <Fragment>
            <div className="container">
                <div className={style.filter}>
                    <label htmlFor="nombre" className="pb-2">{nombre}</label>
                    <select className={style.select} value={opcionSeleccionada} onChange={handleOpcionChange}>
                        <option value="">Seleccionar la zona...</option>
                        <option value="opcion1">Obdulio Mayo S</option>
                        <option value="opcion2">Bellaciota</option>
                        <option value="opcion3">Perpetuo Socorro</option>
                        <option value="opcion3">Naranjal</option>
                        <option value="opcion3">Rada</option>
                    </select>
                </div>
            </div>

        </Fragment>
    )
}
export default FilterComponent;
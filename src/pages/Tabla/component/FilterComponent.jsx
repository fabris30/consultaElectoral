import React, { Fragment, useState } from "react";
import style from '../../../scss/Filter.module.scss';
import Select from "react-select";
const FilterComponent = (props) => {
    const { nombre,options, capOpcions,selectedOption } = props;
    const [opcionSeleccionada, setOpcionSeleccionada] = useState('');

    const handleOpcionChange = (electedOption) => {
        capOpcions(electedOption?.value);
    };
    return (

        <Fragment>
           
                <div className={style.filter}>
                    <label htmlFor="nombre" className="pb-2 text-white">{nombre}</label>
                    <Select 
                      options={options}
                      onChange={handleOpcionChange}
                      isClearable={true}
                    />
                </div>
        

        </Fragment>
    )
}
export default FilterComponent;
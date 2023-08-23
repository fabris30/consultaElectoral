import React, { Fragment, useState } from "react";
import style from '../../../scss/Buscar.module.scss';
import { Button } from "bootstrap";
const BuscarComponent = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };
    return (
        <Fragment>
            <div className="container">
                <div className={style.div}>
                <input className={style.buscar}
                    type="search"
                    placeholder="Buscar por cedula"
                    value={searchTerm}
                    onChange={handleSearchChange}
                    
                />
                <button type="submit" className="btn btn-primary">Buscar</button>
            </div>
            </div>
            
        </Fragment>
    )
}
export default BuscarComponent;

import React, { Fragment, useState } from "react";
import style from '../../../scss/Buscar.module.scss';
import { Button } from "bootstrap";
import { filtrocc } from "../../../Api/ApiMetodo";
const BuscarComponent = (props) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const buscarcc= (e)=>{
        e.preventDefault();
         filtrocc(searchTerm)
         .then((response) =>{
                 props.setElector(response?.data);
          
      })

      .catch(error => console.log(error) )
    }
    return (
        <Fragment>
            <div className="container">
                <form onSubmit={buscarcc}>
                <div className={style.div}>
                    <input className={style.buscar}
                    type="search"
                    placeholder="Buscar por cedula"
                    value={searchTerm}
                    onChange={handleSearchChange}
                    
                />
                <button type="submit" className="btn btn-primary">Buscar</button>   
                 </div>
                </form>
         
            </div>
        
            
        </Fragment>
    )
}
export default BuscarComponent;

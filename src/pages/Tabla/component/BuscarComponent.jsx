import React, { Fragment, useEffect, useState } from "react";
import style from '../../../scss/Buscar.module.scss';
import { filtrocc } from "../../../Api/ApiMetodo";
import Swal from "sweetalert2";
const BuscarComponent = (props) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [msg, setMsg] = useState('');

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const buscarcc= (event)=>{

        event.preventDefault();
        filtrocc(searchTerm) 
         .then((response) =>{ 
       
             props.setElector(response?.electores);
             if(response.msg){
                Swal.fire({
                    icon: 'error',
                    text: response.msg
                  })
                  setMsg(response.msg)
             }

        
      })

      .catch(error => {
        console.log(error)
      });
    }
    useEffect(()=>{

    },[props.elector])
   
    const handleSearchClear = () => {
        // Recarga la página
        window.location.reload();
      };

  
    return (
        <Fragment>
            <div className="w-100">
            <button type="button" className="btn btn-primary  d-block d-sm-none mb-3" onClick={handleSearchClear}>Actualizar Tabla</button>    
              <div className={style.conjuntoBtn}>
              
                <form onSubmit={buscarcc}>
                <div className={style.div}>
                    <input className={style.buscar}
                    type="search"
                    placeholder="Buscar por cedula"
                    value={searchTerm}
                    onChange={handleSearchChange}
                    required
                />
                <div className="d-flex justify-content-between align-items-center me-4">
                     <button type="submit" className="btn btn-primary me-4">Buscar o Actualizar</button>   
                    <button type="button" className="btn btn-primary  d-none d-sm-block" onClick={handleSearchClear}>Actualizar Tabla</button>    
                </div>
            
                 </div>
                </form>
                  <div className="d-flex justify-content-between align-items-center pt-3 pt-lg-0">
                     <a href="https://eleccionescolombia.registraduria.gov.co/Document" className="btn btn-primary me-4" >Consultar lugar votacion</a>   
                    <button type="button" className="btn btn-primary d-none " >Descargar</button>    
                </div>

                </div>  
            </div>
        
            
        </Fragment>
    )
}
export default BuscarComponent;

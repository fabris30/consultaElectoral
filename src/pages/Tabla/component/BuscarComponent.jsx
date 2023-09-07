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

    const buscarcc= (e)=>{

        e.preventDefault();
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
             console.log(response.msg)  
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
            <button type="button" className="btn btn-primary  d-block d-md-none mb-3" onClick={handleSearchClear}>Mostar lista</button>    
                <form onSubmit={buscarcc}>
                <div className={style.div}>
                    <input className={style.buscar}
                    type="search"
                    placeholder="Buscar por cedula"
                    value={searchTerm}
                    onChange={handleSearchChange}
                    required
                />
                <div className="d-flex justify-content-between align-items-center">
                     <button type="submit" className="btn btn-primary me-4">Buscar</button>   
                    <button type="button" className="btn btn-primary  d-none d-md-block" onClick={handleSearchClear}>Mostar lista</button>    
                </div>
              
                 </div>
                </form>
         
            </div>
        
            
        </Fragment>
    )
}
export default BuscarComponent;

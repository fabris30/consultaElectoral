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
                    required
                    
                />
                <button type="submit" className="btn btn-primary">{'Buscar'}</button>   
                 </div>
                </form>
         
            </div>
        
            
        </Fragment>
    )
}
export default BuscarComponent;

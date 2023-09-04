import React, { Fragment, useEffect, useState } from "react";
import style from '../../../scss/Tabla.module.scss';
const TablaComponent = (props) => {
 const {datos,elector} =props;
 console.log(elector)
 console.log(datos)
    return (
        <Fragment>
            <div className=" table-responsive">
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Cedula</th>
                            <th scope="col">Nombres y Apellidos</th>
                            <th scope="col">Zona</th>
                            <th scope="col"># mesa</th>
                            <th scope="col">Direccion</th>
                            <th scope="col">Telefono</th>
                            <th scope="col">Grupo JF</th>
                            <th scope="col">Opciones</th>
                        </tr>
                    </thead>
                    { elector.length === 0 ?   <tbody className={style.tbody}>
                    {datos.map((item,index)=>{
                        return(
                            <tr>
                            <th scope="row">{index + 1}</th>
                            <td>{item.cedula}</td>
                            <td>{item.nombres} {item.apellidos} </td>
                            <td>{item.lugar}</td>
                            <td>{item.mesa}</td>
                            <td>{item.direccion}</td>
                            <td>{item.telefono}</td>
                            <td> 
                                <form action="" >
                                <div className={`form-check`} >
                                     <input className= {`form-check-input  ${style.checkbox}`} type="checkbox" 
                                     checked={item.grupo} />
                                   </div> 
                                </form>
                               
                           </td>
                            <td>
                                <button type="button" className="btn btn-primary me-2">Editar</button>
                                <button type="button" className="btn btn-danger ">Eliminar</button>
                            </td>
                        </tr>
                        )
                       })}
                       
                    </tbody>:
                    <tbody className={style.tbody}>
                  
                            <tr>
                            <th scope="row">{1}</th>
                            <td>{elector.cedula}</td>
                            <td>{elector.nombres} {elector.apellidos} </td>
                            <td>{elector.lugar}</td>
                            <td>{elector.mesa}</td>
                            <td>{elector.direccion}</td>
                            <td>{elector.telefono}</td>
                            <td> 
                                <form action="" >
                                <div className={`form-check`} >
                                     <input className= {`form-check-input  ${style.checkbox}`} type="checkbox" 
                                     checked={elector.grupo} />
                                   </div> 
                                </form>
                               
                           </td>
                            <td>
                                <button type="button" className="btn btn-primary me-2">Editar</button>
                                <button type="button" className="btn btn-danger ">Eliminar</button>
                            </td>
                        </tr>
                       
                    </tbody>}
                </table>
            </div>

        </Fragment>

    )
}
export default TablaComponent;

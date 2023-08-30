import React, { Fragment } from "react";
import style from '../../../scss/Tabla.module.scss';
const TablaComponent = () => {

    return (
        <Fragment>
            <div className=" table-responsive">
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Cedula</th>
                            <th scope="col">Nombres y Apellidos</th>
                            <th scope="col">Lugar de votacion</th>
                            <th scope="col"># mesa</th>
                            <th scope="col">Direccion</th>
                            <th scope="col">Telefono</th>
                            <th scope="col">Grupo</th>
                            <th scope="col">Opciones</th>
                        </tr>
                    </thead>
                    <tbody className={style.tbody}>
                        <tr>
                            <th scope="row">1</th>
                            <td>1032123809</td>
                            <td>Frank Marquez</td>
                            <td>Rada</td>
                            <td>5</td>
                            <td>Camino Real</td>
                            <td>3102022130</td>
                            <td> 
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" />
                               </div>
                           </td>
                            <td>
                                <button type="button" className="btn btn-primary me-2">Editar</button>
                                <button type="button" className="btn btn-danger ">Eliminar</button>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>1032123809</td>
                            <td>Frank Marquez</td>
                            <td>Rada</td>
                            <td>5</td>
                            <td>Camino Real</td>
                            <td>3102022130</td>
                            <td> 
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" />
                               </div>
                           </td>
                            <td>
                                <button type="button" className="btn btn-primary me-2">Editar</button>
                                <button type="button" className="btn btn-danger ">Eliminar</button>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>1032123809</td>
                            <td>Frank Marquez</td>
                            <td>Rada</td>
                            <td>5</td>
                            <td>Camino Real</td>
                            <td>3102022130</td>
                            <td> 
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" />
                               </div>
                           </td>
                            <td>
                                <button type="button" className="btn btn-primary me-2">Editar</button>
                                <button type="button" className="btn btn-danger ">Eliminar</button>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">4</th>
                            <td>1032123809</td>
                            <td>Frank Marquez</td>
                            <td>Rada</td>
                            <td>5</td>
                            <td>Camino Real</td>
                            <td>3102022130</td>
                            <td> 
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" />
                               </div>
                           </td>
                            <td>
                                <button type="button" className="btn btn-primary me-2">Editar</button>
                                <button type="button" className="btn btn-danger ">Eliminar</button>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">5</th>
                            <td>1032123809</td>
                            <td>Frank Marquez</td>
                            <td>Rada</td>
                            <td>5</td>
                            <td>Camino Real</td>
                            <td>3102022130</td>
                            <td> 
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" />
                               </div>
                           </td>
                            <td>
                                <button type="button" className="btn btn-primary me-2">Editar</button>
                                <button type="button" className="btn btn-danger ">Eliminar</button>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">6</th>
                            <td>1032123809</td>
                            <td>Frank Marquez</td>
                            <td>Rada</td>
                            <td>5</td>
                            <td>Camino Real</td>
                            <td>3102022130</td>
                            <td> 
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" />
                               </div>
                           </td>
                            <td>
                                <button type="button" className="btn btn-primary me-2">Editar</button>
                                <button type="button" className="btn btn-danger ">Eliminar</button>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">7</th>
                            <td>1032123809</td>
                            <td>Frank Marquez</td>
                            <td>Rada</td>
                            <td>5</td>
                            <td>Camino Real</td>
                            <td>3102022130</td>
                            <td> 
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" />
                               </div>
                           </td>
                            <td>
                                <button type="button" className="btn btn-primary me-2">Editar</button>
                                <button type="button" className="btn btn-danger ">Eliminar</button>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">8</th>
                            <td>1032123809</td>
                            <td>Frank Marquez</td>
                            <td>Rada</td>
                            <td>5</td>
                            <td>Camino Real</td>
                            <td>3102022130</td>
                            <td> 
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" />
                               </div>
                           </td>
                            <td>
                                <button type="button" className="btn btn-primary me-2">Editar</button>
                                <button type="button" className="btn btn-danger ">Eliminar</button>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">9</th>
                            <td>1032123809</td>
                            <td>Frank Marquez</td>
                            <td>Rada</td>
                            <td>5</td>
                            <td>Camino Real</td>
                            <td>3102022130</td>
                            <td> 
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" />
                               </div>
                           </td>
                            <td>
                                <button type="button" className="btn btn-primary me-2">Editar</button>
                                <button type="button" className="btn btn-danger ">Eliminar</button>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">10</th>
                            <td>1032123809</td>
                            <td>Frank Marquez</td>
                            <td>Rada</td>
                            <td>5</td>
                            <td>Camino Real</td>
                            <td>3102022130</td>
                            <td> 
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" />
                               </div>
                           </td>
                            <td >
                                <button type="button" className="btn btn-primary me-2">Editar</button>
                                <button type="button" className="btn btn-danger ">Eliminar</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </Fragment>

    )
}
export default TablaComponent;

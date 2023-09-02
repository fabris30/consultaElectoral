import React, {Fragment} from "react";
import style from '../../../scss/ResultadoConteo.module.scss';

const ResultadoConteoComponent =() => {
  
    return(
        <Fragment>
            <div className=" table-responsive">
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Candidato</th>
                            <th scope="col">Lugar de votacion</th>
                            <th scope="col">Numero de la mesa</th>
                            <th scope="col">Votos</th>
                            <th scope="col">Opciones</th> 
                        </tr>
                    </thead>
                    <tbody className={style.tbody}>
                        <tr>
                            <th scope="row">1</th>
                            <td>Jose Felix</td>
                            <td>Rio cedro</td>
                            <td>3</td>
                            <td>36</td>
                            <td>
                                <button type="button" className="btn btn-primary me-2">Editar</button>
                                <button type="button" className="btn btn-danger ">Eliminar</button>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jose Felix</td>
                            <td>Rio cedro</td>
                            <td>3</td>
                            <td>36</td>
                            <td>
                                <button type="button" className="btn btn-primary me-2">Editar</button>
                                <button type="button" className="btn btn-danger ">Eliminar</button>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Jose Felix</td>
                            <td>Rio cedro</td>
                            <td>3</td>
                            <td>36</td>
                            <td>
                                <button type="button" className="btn btn-primary me-2">Editar</button>
                                <button type="button" className="btn btn-danger ">Eliminar</button>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">4</th>
                            <td>Jose Felix</td>
                            <td>Rio cedro</td>
                            <td>3</td>
                            <td>36</td>
                            <td>
                                <button type="button" className="btn btn-primary me-2">Editar</button>
                                <button type="button" className="btn btn-danger ">Eliminar</button>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">5</th>
                            <td>Jose Felix</td>
                            <td>Rio cedro</td>
                            <td>3</td>
                            <td>36</td>
                            <td>
                                <button type="button" className="btn btn-primary me-2">Editar</button>
                                <button type="button" className="btn btn-danger ">Eliminar</button>
                            </td>
                        </tr>
                 </tbody>   
             </table>
         </div>       
        </Fragment>
    )

};
export default ResultadoConteoComponent;
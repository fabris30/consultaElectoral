import React, { Fragment, useState } from "react";
import style from '../../../scss/Tabla.module.scss';
import ModalconteoComponent from "./ModalconteoComponent";
import AlertComponent from "../../../components/AlertComponent";
const TablaConteo =(props)=>{
    const [show, setShow] = useState(false);
    const {datos,setconteo}=props;

    const [selectedOptionlugar, setSelectedOptionlugar] = useState(null);
    const [selectedOptionmesa, setSelectedOptionmesa] = useState(null);
    const [selectecandidato, setSelectecandidato] = useState(null);
    const [Votos, setVotos] = useState();
    const [id, setId]= useState('');
    const [mostraralert, setMostraralert] = useState(false);
    const [colorAlert, setcolorAlert] = useState('');
    const [alerta, setAlerta] = useState('');
    const handleShow = (editar) =>{
        setId(editar._id)
        setSelectecandidato(editar.candidato)
        setSelectedOptionlugar(editar.lugar)
        setSelectedOptionmesa(editar.mesa)
         setVotos(editar.votos)
     } 
    return(
        <Fragment>
            <div className="d-flex justify-content-center">
            <AlertComponent mensaje={alerta} mostraralert={mostraralert} styleGrup={`${colorAlert} text-center  w-50`} />

            </div>
      <div className="table-responsive"> 
                <table class="table" >
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Candidato</th>
                            <th scope="col">Zona</th>
                            <th scope="col">#mesa</th>
                            <th scope="col">Votos</th>
                            <th scope="col" colspan="2">Opciones</th>
                        </tr>
                    </thead>
                 <tbody className={style.tbody}>
                    {datos.map((item,index)=>{
                        return(
                            <tr>
                            <th scope="row">{index + 1}</th>
                            <td>{item.candidato}</td>
                            <td>{item.lugar}</td>
                            <td>{item.mesa}</td>
                            <td>{item.votos}</td>
                           
                            <td>
                                <button type="button" className="btn btn-primary " onClick={()=>{handleShow(item);setShow(true)}} >Editar</button>
                              </td>  
                              <td>
                              <button type="button" className="btn btn-danger " >Eliminar</button>

                              </td>
                            
                        </tr>
                        )
                       })}
                       
                    </tbody>
                </table>
            </div>
            <ModalconteoComponent
              setShow={setShow} 
              show={show} 
              id={id}
              setId={setId}
              setSelectedOptionlugar={setSelectedOptionlugar}
             setSelectedOptionmesa={setSelectedOptionmesa}
             setSelectecandidato={setSelectecandidato}
             setVotos={setVotos}
             selectedOptionlugar={selectedOptionlugar}
             selectedOptionmesa={selectedOptionmesa}
             candidato={selectecandidato}
             votos={Votos}
             setcolorAlert={setcolorAlert}
             setAlerta={setAlerta}
             datos={datos}
             setconteo={setconteo}
              setMostraralert={setMostraralert}
             />
        </Fragment>
    )
}
export default  TablaConteo;
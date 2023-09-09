import React, { Fragment, useEffect, useState} from "react";
import style from '../../../scss/Tabla.module.scss';
import { editarElector, editarGrupo, eliminarElector } from "../../../Api/ApiMetodo";
import Swal from 'sweetalert2';
import ModalComponent from "./ModalComponent";
import AlertComponent from "../../../components/AlertComponent";

const TablaComponent = (props) => {
    const [id, setId]= useState('');
    const [cedula, setCedula] = useState('');
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [selectedOptionlugar, setSelectedOptionlugar] = useState(null);
    const [selectedOptionmesa, setSelectedOptionmesa] = useState(null);
    const [direccion, setDireccion] = useState('');
    const [telefono, setTelefono] = useState('');
    const [grupo, setGrupo] = useState(false);
    const [mostraralert, setMostraralert] = useState(false);
    const [colorAlert, setcolorAlert] = useState('');
    const [alerta, setAlerta] = useState('');
    const [datostable, setdatostable] = useState([]);
    const [electortble, setelectortble] = useState([]);
    //const [editarE, setEditarE]= useState([]);
    const [show, setShow] = useState(false);
    const {datos,elector} =props;
      
      useEffect(()=>{
         setdatostable(datos);
         setelectortble(elector)
      },[datos,elector])
    const handleShow = (editarE) =>{
      
       setId(editarE._id)
       setCedula(editarE.cedula)
       setNombre(editarE.nombres)
       setApellido(editarE.apellidos)
       setSelectedOptionlugar(editarE.lugar)
       setSelectedOptionmesa(editarE.mesa)
       setDireccion(editarE.direccion)
       setTelefono(editarE.telefono)
       console.log('edi',editarE)
    } 
// actaulizar 1


const grupoCheckboxelector = (id)=> {
   
    Swal.fire({
        title: '¿Estás seguro?',
        text: 'Si Confirma se cambiara de grupo',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Sí',
        cancelButtonText: 'No',
      }).then((result) => {
        if (result.isConfirmed) {
            let newdatoselec=electortble;
            newdatoselec.grupo= !newdatoselec.grupo;
            let cambio=newdatoselec.grupo;
          editarGrupo(id,cambio).then(response =>{
                 setelectortble(newdatoselec);
                })

    .catch(error =>console.error(error));
        }
      });

   
 }
 const grupoCheckbox = (id,grupo,index)=> {
   
    Swal.fire({
        title: '¿Estás seguro?',
        text: 'Si Confirma se cambiara de grupo',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Sí',
        cancelButtonText: 'No',
      }).then((result) => {
        if (result.isConfirmed) {
            let newdatos=[...datos];
            newdatos[index].grupo=!newdatos[index].grupo;
            let cambio=!grupo;
          editarGrupo(id,cambio).then(response =>{
                 setdatostable(newdatos);
                })

    .catch(error =>console.error(error));
        }
      });

   
 }
    
 const eliminarCedula = (cedula) =>{
    Swal.fire({
        title: '¿Estás seguro?',
        text: 'Una vez eliminado, no podrás recuperar esta cc: .'+cedula,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Sí, Confirmar',
        cancelButtonText: 'Cancelar',
      }).then((result) => {
        if (result.isConfirmed) {
          // Si el usuario confirma la eliminación, realiza la lógica de eliminación aquí
             eliminarElector(cedula).then(response =>{
                 console.log(response)
                 Swal.fire({
                    icon: 'success',
                    title: 'Elemento eliminado',
                    text: response.msg,
                  });
                })

    .catch(error =>console.error(error));
        }
      });     
 }
  
 
    return (
        <Fragment>
             <div className="d-flex justify-content-center">
            <AlertComponent mensaje={alerta} mostraralert={mostraralert} styleGrup={`${colorAlert} text-center  w-50`} />

            </div>
            <div className="table-responsive"> 
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Cedula</th>
                            <th scope="col">Nombres y Apellidos</th>
                            <th scope="col">Zona</th>
                            <th scope="col">#mesa</th>
                            <th scope="col">Direccion</th>
                            <th scope="col">Telefono</th>
                            <th scope="col">Grupo JF</th>
                            <th scope="col" colspan="2">Opciones</th>
                        </tr>
                    </thead>
                    { elector.length === 0 ?   <tbody className={style.tbody}>
                    {datostable.map((item,index)=>{
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
                                     <input className= {`form-check-input  ${style.checkbox}`}  type="checkbox" 
                                     checked={item.grupo}
                                     onChange={()=>grupoCheckbox(item._id,item.grupo,index)}
                                      />
                                   </div> 
                                </form>
                               
                           </td>
                            <td>
                                <button type="button" className="btn btn-primary " onClick={()=>{handleShow(item);setShow(true)}} >Editar</button>
                              </td>  
                              <td>
                              <button type="button" className="btn btn-danger " onClick={()=> eliminarCedula(item.cedula)} >Eliminar</button>

                              </td>
                            
                        </tr>
                        )
                       })}
                       
                    </tbody>:
                    <tbody className={style.tbody}>
                  
                            <tr>
                            <th scope="row">{1}</th>
                            <td>{electortble.cedula}</td>
                            <td>{electortble.nombres} {elector.apellidos} </td>
                            <td>{electortble.lugar}</td>
                            <td>{electortble.mesa}</td>
                            <td>{electortble.direccion}</td>
                            <td>{electortble.telefono}</td>
                            <td> 
                                <form action="" >
                                <div className={`form-check`} >
                                     <input className= {`form-check-input  ${style.checkbox}`}  type="checkbox" 
                                     checked={electortble.grupo} 
                                     onChange={()=>grupoCheckboxelector(electortble._id)}
                                     />
                                   </div> 
                                </form>
                               
                           </td>
                            <td>
                            <button type="button" className="btn btn-primary me-2" onClick={()=>{handleShow(elector);setShow(true)}} >Editar</button>
                             </td>   
                             <td>
                                <button type="button" className="btn btn-danger " onClick={()=> eliminarCedula(elector.cedula)} >Eliminar</button>
                             </td>
                             
                            
                        </tr>
                       
                    </tbody>}
                </table>
              
                
            </div>
          <ModalComponent 
          id={id}
          setId={setId}
          setShow={setShow} 
          show={show} 
          setCedula={setCedula}
          setNombre={setNombre}
          setApellido={setApellido}
          setSelectedOptionlugar={setSelectedOptionlugar}
          setSelectedOptionmesa={setSelectedOptionmesa}
          setDireccion={setDireccion}
          setTelefono={setTelefono}
          setGrupo={setGrupo}
          cedula={cedula}
          nombre={nombre}
          apellido={apellido}
          selectedOptionlugar={selectedOptionlugar}
          selectedOptionmesa={selectedOptionmesa}
          direccion={direccion}
          telefono={telefono}
          grupo={grupo}
          setcolorAlert={setcolorAlert}
          setAlerta={setAlerta}
          
           setMostraralert={setMostraralert}
          
           />
        </Fragment>

    )
}
export default TablaComponent;

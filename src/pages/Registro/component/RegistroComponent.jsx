import React, { Fragment, useState } from "react";
import style from '../../../scss/Registro.module.scss';
import { crearElectores } from "../../../Api/ApiMetodo";
import AlertComponent from "../../../components/AlertComponent";
const RegistroComponent = () => {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [cedula, setCedula] = useState('');
    const [lugar, setLugar] = useState('');
    const [mesa, setMesa] = useState('');
    const [direccion, setDireccion] = useState('');
    const [telefono, setTelefono] = useState('');
    const [grupo, setGrupo] = useState(false);
    const [alerta, setAlerta] = useState('');
    const [mostraralert, setMostraralert] = useState(false);
    const [colorAlert, setcolorAlert] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Aquí puedes realizar alguna acción con los datos del formulario, como enviarlos a un servidor.
        crearElectores(cedula,nombre,apellido,lugar,mesa,direccion,telefono, grupo).then((response) =>{
                setAlerta(response.data.msg)
                setMostraralert(true);
                setcolorAlert('alert-success');
                setTimeout(() => {
                 setMostraralert(false);
               }, 3000); 
          })
    
          .catch(error => {
            // Manejar el error aquí
            if (error.response) {
              // Error de respuesta del servidor
              setMostraralert(true);
              setAlerta(error.response.data.error);
              setcolorAlert('alert-danger');
              setTimeout(() => {
                setMostraralert(false);
              }, 3000); 
            } else if (error.request) {
              // Error de solicitud (por ejemplo, no se pudo hacer la solicitud al servidor)
              console.error('Error de solicitud:', error.request);
            } else {
              // Otros errores
              console.error('Error:', error.message);
            }
      
          });
    };
    return (
        <Fragment>
            <div className="d-flex justify-content-center">
            <AlertComponent mensaje={alerta} mostraralert={mostraralert} styleGrup={`${colorAlert} text-center  w-50`} />

            </div>
            <div className={style.Registro}>
                <form onSubmit={handleSubmit} className={style.formulario}>
                    <h2>Registro de electores</h2>
                    <div className="row gy-4">
                    <div className="col-12 col-md-6">
                            <label htmlFor="cedula">Numero de cedula:</label>
                            <input
                                type="text"
                                id="cedula"
                                className="form-control"
                                value={cedula}
                                onChange={(e) => setCedula(e.target.value)}
                                required
                            />
                        </div>
                        <div className="col-12 col-md-6">
                            <label htmlFor="nombre">Nombres:</label>
                            <input
                                type="text"
                                id="nombre"
                                className="form-control"
                                value={nombre}
                                onChange={(e) => setNombre(e.target.value)}
                                required
                            />
                        </div>
                        <div className="col-12 col-md-6">
                            <label htmlFor="apellido">Apellidos:</label>
                            <input
                                type="text"
                                id="apellido"
                                className="form-control"
                                value={apellido}
                                onChange={(e) => setApellido(e.target.value)}
                                required
                            />
                        </div>                     
                        <div className="col-12 col-md-6">
                            <label htmlFor="lugar">Lugar de votacion:</label>
                            <input
                                type="text"
                                id="lugar"
                                className="form-control"
                                value={lugar}
                                onChange={(e) => setLugar(e.target.value)}
                                required
                            />
                        </div>
                        <div className="col-12 col-md-6">
                            <label htmlFor="mesa">Numero de la Mesa:</label>
                            <input
                                type="text"
                                id="mesa"
                                className="form-control"
                                value={mesa}
                                onChange={(e) => setMesa(e.target.value)}
                                required
                            />
                        </div>
                        <div className="col-12 col-md-6">
                            <label htmlFor="direccion">Direccion:</label>
                            <input
                                type="text"
                                id="direccion"
                                className="form-control"
                                value={direccion}
                                onChange={(e) => setDireccion(e.target.value)}
                            />
                        </div>
                        <div className="col-12 col-md-6">
                            <label htmlFor="telefono">Telefono:</label>
                            <input
                                type="text"
                                id="telefono"
                                className="form-control"
                                value={telefono}
                                onChange={(e) => setTelefono(e.target.value)}
                            />
                        </div>

                    </div>
                    <div className="py-4">
                        <button type="submit" className="btn btn-primary w-100">Agregar</button>
                    </div>


                </form>
            </div>
        </Fragment>

    )
}
export default RegistroComponent;
import React, { Fragment, useState } from "react";
import style from '../../../scss/Registro.module.scss';
const RegistroComponent = () => {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [cedula, setCedula] = useState('');
    const [lugar, setLugar] = useState('');
    const [mesa, setMesa] = useState('');
    const [profesion, setProfesion] = useState('');


    const handleSubmit = (event) => {
        event.preventDefault();
        // Aquí puedes realizar alguna acción con los datos del formulario, como enviarlos a un servidor.
        console.log('Nombre:', nombre);
        console.log('Apellido:', apellido);
        console.log('Cedula:', cedula);
        console.log('Lugar:', lugar);
        console.log('Mesa:', mesa);
        console.log('Profesion', profesion);
    };
    return (
        <Fragment>
            <div className={style.Registro}>
                <form onSubmit={handleSubmit} className={style.formulario}>
                    <h2>Registro de electores</h2>
                    <div className="row gy-4">
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
                                type="number"
                                id="mesa"
                                className="form-control"
                                value={mesa}
                                onChange={(e) => setMesa(e.target.value)}
                                required
                            />
                        </div>
                        <div className="col-12 col-md-6">
                            <label htmlFor="mesa">Profesion:</label>
                            <input
                                type="text"
                                id="profesion"
                                className="form-control"
                                value={profesion}
                                onChange={(e) => setProfesion(e.target.value)}
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
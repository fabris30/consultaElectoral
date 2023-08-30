import React, { Fragment, useState } from "react";
import style from '../../../scss/Conteo.module.scss';

const RegistroConteoComponent = () => {

    const [candidato, setCandidato] = useState('');
    const [lugar, setLugar] = useState('');
    const [mesa, setMesa] = useState('');
    const [votos, setVotos] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Aquí puedes realizar alguna acción con los datos del formulario, como enviarlos a un servidor.
        console.log('Candidato:', candidato);
        console.log('Lugar:', lugar);
        console.log('Mesa:', mesa);
        console.log('Votos', votos);
    };
    return (

        <Fragment>
            <div className={style.Registro}>
                <form onSubmit={handleSubmit} className={style.formulario}>
                    <h2>Registro de electores</h2>
                    <div className="row gy-4">
                        <div className="col-12 col-md-6">
                            <label htmlFor="candidato">Candidato:</label>
                            <input
                                type="text"
                                id="candidato"
                                className="form-control"
                                value={candidato}
                                onChange={(e) => setCandidato(e.target.value)}
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
                            <label htmlFor="votos">Cantidad de votos:</label>
                            <input
                                type="number"
                                id="votos"
                                className="form-control"
                                value={votos}
                                onChange={(e) => setVotos(e.target.value)}
                                required
                            />
                        </div>
                        <div className="py-4">
                        <button type="submit" className="btn btn-primary w-100">Agregar</button>
                    </div>

                 </div>
             </form>
          </div>
        </Fragment>

    )
}
export default RegistroConteoComponent;

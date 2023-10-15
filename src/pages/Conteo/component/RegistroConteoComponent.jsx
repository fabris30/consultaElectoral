import React, { Fragment, useState } from "react";
import style from '../../../scss/Conteo.module.scss';
import FilterComponent from "../../Tabla/component/FilterComponent";
import { crearConteo, filtrovotos } from "../../../Api/ApiConteo";
import AlertComponent from "../../../components/AlertComponent";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const RegistroConteoComponent = () => {

    const [candidato, setCandidato] = useState(null);
    const [votos, setVotos] = useState('');
    const [selectedOptionlugar, setSelectedOptionlugar] = useState(null);
    const [selectedOptionmesa, setSelectedOptionmesa] = useState(null);
    const [alerta, setAlerta] = useState('');
    const [mostraralert, setMostraralert] = useState(false);
    const [colorAlert, setcolorAlert] = useState('');
    const optionslugar = [
        { value: 'Obdulio Mayo s', label: 'Obdulio Mayo s'},
        { value: 'Bellacoita', label: 'Bellacoita'},
        { value: 'Rada', label: 'Rada' },
        { value: 'Perpetuo S', label: 'Perpetuo S'},
        { value: 'Bajo Limon', label: 'Bajo Limon'},
        { value: 'Santander', label: 'Santander' },
        { value: 'Broqueles', label: 'Broqueles' },
        { value: 'Rio Cedro', label: 'Rio Cedro' },
        { value: 'Las Mujeres', label: 'Las Mujeres' },
        { value: 'Naranjal', label: 'Naranjal' },
        { value: 'Union', label: 'Union' }
      ]
      const optionsmesa = [
        { value: '1', label: 'mesa 1'},
        { value: '2', label: 'mesa 2'},
        { value: '3', label: 'mesa 3'},
        { value: '4', label: 'mesa 4'},
        { value: '5', label: 'mesa 5'},
        { value: '6', label: 'mesa 6'},
        { value: '7', label: 'mesa 7'},
        { value: '8', label: 'mesa 8'},
        { value: '9', label: 'mesa 9'},
        { value: '10', label: 'mesa 10'},
        { value: '11', label: 'mesa 11'},
        { value: '12', label: 'mesa 12'},
        { value: '13', label: 'mesa 13'},
        { value: '14', label: 'mesa 14'},
        { value: '15', label: 'mesa 15'},
        { value: '16', label: 'mesa 16'},
        { value: '17', label: 'mesa 17'},
        { value: '18', label: 'mesa 18'},
        { value: '19', label: 'mesa 19'},
        { value: '20', label: 'mesa 20'},
        { value: '21', label: 'mesa 21'},
        { value: '22', label: 'mesa 22'},
        { value: '23', label: 'mesa 23'},
        { value: '24', label: 'mesa 24'},
        { value: '25', label: 'mesa 25'},
        { value: '26', label: 'mesa 26'},
        { value: '27', label: 'mesa 27'},
        { value: '28', label: 'mesa 28'},
        { value: '29', label: 'mesa 29'},
        { value: '30', label: 'mesa 30'}
      ]
      const opcionCandidato = [

        {value: 'jf', label: "Jose Felix"},
        {value: 'daley', label: "Daley Terris"},
        {value: 'juanca', label: "Juan Carlos"},
        {value: 'blanco', label: "Votos Blanco"},
        {value: 'nulo', label: "Votos Nulo"}

      ]

      const handleSubmit = (event) => {
        event.preventDefault();
        // Aquí puedes realizar alguna acción con los datos del formulario, como enviarlos a un servidor.
        filtrovotos({candidato:candidato,lugar: selectedOptionlugar,mesa:selectedOptionmesa}).then(response =>
          {
             if(response){
                 if(response?.length >0){
                  Swal.fire({
                    icon: 'error',
                    text: 'Existe el Registro'
                  })
                  
                 } else{
                  crearConteo(candidato,selectedOptionlugar,selectedOptionmesa,votos).then((response) =>{
                    setAlerta(response.data.msg)
                    setMostraralert(true);
                    setVotos('');
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
                 }
             }
          })
     .catch(error =>console.error(error));
       
    };
 
    return (

        <Fragment>
            <div className={style.Registro}>
                <form onSubmit={handleSubmit} className={style.formulario}>
                    <h2 className="text-white">Registro de Votos</h2>
                    <div className="row gy-4">
                        <div className="col-12 col-md-6">
                        <FilterComponent nombre='* Select Candidato' options={opcionCandidato} styleGrupo="text-white" capOpcions={setCandidato} selectedOption={candidato}/> 
                            
                        </div>
                        <div className="col-12 col-md-6">

                            <FilterComponent nombre='* Select lugar' options={optionslugar} styleGrupo="text-white" capOpcions={setSelectedOptionlugar} selectedOption={selectedOptionlugar}/> 
                        </div>
                        <div className="col-12 col-md-6">

                           <FilterComponent nombre='* Select Mesa' options={optionsmesa} styleGrupo="text-white" capOpcions={setSelectedOptionmesa} selectedOption={selectedOptionmesa}/>
                            
                        </div>
                        <div className="col-12 col-md-6">
                            <label htmlFor="votos" className="text-white">Cantidad de votos:</label>
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
                        <button type="submit" className="btn btn-primary w-100 mb-2">Agregar</button>
                        <Link to={'/resultado'} className="text-white">Ir a resultados</Link>
                    </div>
                    <div className="d-flex justify-content-center">
                       <AlertComponent mensaje={alerta} mostraralert={mostraralert} styleGrup={`${colorAlert} text-center  w-50`} />

                     </div>
                 </div>
             </form>
           
          </div>
        </Fragment>

    )
}
export default RegistroConteoComponent;

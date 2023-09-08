import React, { Fragment, useState } from "react";
import style from '../../../scss/Registro.module.scss';
import { crearElectores } from "../../../Api/ApiMetodo";
import AlertComponent from "../../../components/AlertComponent";
import FilterComponent from "../../Tabla/component/FilterComponent";
const RegistroComponent = () => {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [cedula, setCedula] = useState('');
    const [direccion, setDireccion] = useState('');
    const [telefono, setTelefono] = useState('');
    const [grupo, setGrupo] = useState(false);
    const [alerta, setAlerta] = useState('');
    const [mostraralert, setMostraralert] = useState(false);
    const [colorAlert, setcolorAlert] = useState('');
    const [selectedOptionlugar, setSelectedOptionlugar] = useState(null);
    const [selectedOptionmesa, setSelectedOptionmesa] = useState(null);
  
   const optionslugar = [
    { value: 'Obdulio Mayo s', label: 'Obdulio Mayo s'},
    { value: 'Bellacoita', label: 'Bellacoita'},
    { value: 'Rada', label: 'Rada' },
    { value: 'Perpetuo S', label: 'Perpetuo S' },
    { value: 'Bajo Limon', label: 'Bajo Limon' },
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


    const handleSubmit = (event) => {
        event.preventDefault();
        // Aquí puedes realizar alguna acción con los datos del formulario, como enviarlos a un servidor.
        crearElectores(cedula,nombre,apellido,selectedOptionlugar,selectedOptionmesa,direccion,telefono, grupo).then((response) =>{
                setAlerta(response.data.msg)
                setMostraralert(true);
                setCedula('');
                setNombre('');
                setApellido('');
                setDireccion('');
                setTelefono('');
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
                            <label htmlFor="cedula">* Numero de cedula:</label>
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
                            <label htmlFor="nombre">* Nombres:</label>
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
                            <label htmlFor="apellido">* Apellidos:</label>
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
                           
                            <FilterComponent nombre='* Select lugar' options={optionslugar} capOpcions={setSelectedOptionlugar} selectedOption={selectedOptionlugar}/>
                            
                        </div>
                        <div className="col-12 col-md-6">
                            

                            <FilterComponent nombre='* Select Mesa' options={optionsmesa} capOpcions={setSelectedOptionmesa} selectedOption={selectedOptionmesa}/>
                          
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
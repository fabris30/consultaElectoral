import React, { Fragment, useEffect } from "react";
import { Modal } from "react-bootstrap";
import FilterComponent from "../../Tabla/component/FilterComponent";
import style from '../../../scss/modal.module.scss';
import { editarconteo } from "../../../Api/ApiConteo";
const ModalconteoComponent =(props)=>{
    const {setShow, show, setSelectedOptionlugar, selectedOptionlugar,
       selectedOptionmesa,setSelectedOptionmesa,id, setMostraralert,setcolorAlert,
       setAlerta,votos, setVotos,setSelectecandidato, candidato,datos,setconteo}=props;
const handleClose = () => setShow(false);
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
  const opcionCandidato = [

    {value: 'jf', label: "Jose Felix"},
    {value: 'daley', label: "Daley Terris"},
    {value: 'juanca', label: "Juan Carlos"},
    {value: 'blanco', label: "Votos Blanco"},
    {value: 'nulo', label: "Votos Nulo"}

  ]
  const editarCId = ()=>{
    editarconteo(id,candidato,selectedOptionlugar,selectedOptionmesa,votos).then(response =>{
        setMostraralert(true);
        setcolorAlert('alert-success');
        setAlerta(response.msg);
        setShow(false);
        setTimeout(() => {
            setMostraralert(false)
        }, 3000);
    });
 }


    return(
        <Fragment>
        <>
          <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
          <Modal.Title>Editar Conteo</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <div className="d-flex justify-content-center">
             <div className={style.Registro}>
                <form className={style.formulario}>
                   <div className="row gy-4">
                        <div className="col-12 col-md-6">
                        <FilterComponent nombre='Select Candidato' options={opcionCandidato} capOpcions={setSelectecandidato} selectedOption={setSelectecandidato}/>
                          
                        </div>                     
                        <div className="col-12 col-md-6">
                           
                            <FilterComponent nombre='Select lugar' options={optionslugar} capOpcions={setSelectedOptionlugar} selectedOption={selectedOptionlugar}/>
                            
                        </div>
                        <div className="col-12 col-md-6">
                            

                            <FilterComponent nombre='Select Mesa' options={optionsmesa} capOpcions={setSelectedOptionmesa} selectedOption={selectedOptionmesa}/>
                          
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
                        
                          
                   </div>
                         <div className="col-12 col-md-6 mt-3">
                             <button type="button" className="btn btn-primary me-6"  onClick={()=>{editarCId()}}>Guardar Cambios</button>
                         </div>
                 </form>
                 
              </div> 
            
            </div>
          </Modal.Body>
          </Modal>
        </>
    </Fragment>
    )
}
export default ModalconteoComponent;
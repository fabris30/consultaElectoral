import React, {Fragment,useEffect,useState} from "react";
import TablaComponent from "../Tabla/component/TablaComponent.jsx";
import Stylegeneral from '../../scss/general.module.scss'
import TablaConteo from "./component/TablaConteo.jsx";
import { filtrovotos, getConteo } from "../../Api/ApiConteo.js";
import FilterComponent from "../Tabla/component/FilterComponent.jsx";
import { computeHeadingLevel } from "@testing-library/react";
const ResultadoConteoPages = () => {
    const [conteo,setconteo]=useState([]);
    const [candidato,setcandidato]=useState([]);
    const [selectedOptionlugar, setSelectedOptionlugar] = useState(null);
    const [selectedOptionmesa, setSelectedOptionmesa] = useState(null);
    const [selectecandidato, setSelectecandidato] = useState(null);
    let sumaDeVotos = 0;
    let sumaDeVotosjf = 0;
    let sumaDeVotosdaley = 0;
    let sumaDeVotosjuanca = 0;
    let sumaDeVotosblancos = 0;
    let sumaDeVotosnulos = 0;
    useEffect(()=>{
        getConteo().then(response => setconteo(response?.data.conteo))
            .catch(error =>console.error(error));
        },[])
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

           //metodo de filtro 
    useEffect(()=>{
        filtrosr();
          },[selectecandidato,selectedOptionlugar,selectedOptionmesa])
  
   const filtrosr=()=>{
        filtrovotos({candidato:selectecandidato,lugar: selectedOptionlugar,mesa:selectedOptionmesa}).then(response =>
               {
                  if(response){
                      if(response?.length >0){
                          setconteo(response)
                      } else setconteo(response)
                  }
               })
          .catch(error =>console.error(error));
   } 

   conteo.forEach((voto) => {
    if(voto.candidato=="jf"){
         sumaDeVotosjf+=voto.votos;
    }
    if(voto.candidato=="daley"){
        sumaDeVotosdaley+=voto.votos;
   }
   if(voto.candidato=="juanca"){
    sumaDeVotosjuanca+=voto.votos;
}
if(voto.candidato=="blanco"){
    sumaDeVotosblancos+=voto.votos;
}
if(voto.candidato=="nulo"){
    sumaDeVotosnulos+=voto.votos;
}
    sumaDeVotos+=voto.votos;
  
 }); 
 

    return (
        <Fragment>
   
    <section>
        <div className="container pb-2">
            <div className="row gy-4">
                     {/*<div className="col-12 col-md-4">
                        <FilterComponent nombre='* Select Candidato' options={opcionCandidato} styleGrupo="text-white" capOpcions={setSelectecandidato} selectedOption={selectecandidato}/> 
                            
    </div>*/}
                        <div className="col-12 col-md-4">

                            <FilterComponent nombre='* Select lugar' options={optionslugar} styleGrupo="text-white" capOpcions={setSelectedOptionlugar} selectedOption={selectedOptionlugar}/> 
                        </div>
                        <div className="col-12 col-md-4">

                           <FilterComponent nombre='* Select Mesa' options={optionsmesa} styleGrupo="text-white" capOpcions={setSelectedOptionmesa} selectedOption={selectedOptionmesa}/>
                            
                        </div>
                    </div>
        </div>
            
    </section>
    <section>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6">
            <p className={`text-white mb-0 px-2`}>Votos Generales:  {sumaDeVotos.toLocaleString()} votos</p>
            <p className={` mb-1 text-white px-2 ${sumaDeVotosblancos>sumaDeVotosjf && sumaDeVotosblancos>sumaDeVotosdaley && sumaDeVotosblancos > sumaDeVotosjuanca && sumaDeVotosblancos > sumaDeVotosnulos ? 'bg-success d-inline-flex ':''}`}>Votos en Blancos:  {sumaDeVotosblancos.toLocaleString()} votos</p>
            <p className={` mb-1 text-white px-2 ${sumaDeVotosnulos>sumaDeVotosjf && sumaDeVotosnulos>sumaDeVotosdaley && sumaDeVotosnulos > sumaDeVotosjuanca && sumaDeVotosnulos > sumaDeVotosblancos ? 'bg-success d-inline-flex ':''}`}>Votos Nulos:  {sumaDeVotosnulos.toLocaleString()} votos</p>
            </div>
            <div className="col-12 col-md-6">
            <p className={` mb-0 text-white px-2  ${sumaDeVotosjf>sumaDeVotosdaley && sumaDeVotosjf>sumaDeVotosjuanca && sumaDeVotosjf>sumaDeVotosblancos && sumaDeVotosjf > sumaDeVotosnulos ? 'bg-success d-inline-flex ':''}`}>Votos de Jose F:  {sumaDeVotosjf.toLocaleString()} votos</p>
            <p className={` mb-0 text-white px-2 ${sumaDeVotosdaley>sumaDeVotosjf && sumaDeVotosdaley>sumaDeVotosjuanca && sumaDeVotosdaley>sumaDeVotosblancos && sumaDeVotosdaley > sumaDeVotosnulos? 'bg-success d-inline-flex ':''}`}>Votos de Daley:  {sumaDeVotosdaley.toLocaleString()} votos</p>
            <p className={` mb-1 text-white px-2 ${sumaDeVotosjuanca>sumaDeVotosjf && sumaDeVotosjuanca>sumaDeVotosdaley && sumaDeVotosjuanca>sumaDeVotosblancos && sumaDeVotosjuanca > sumaDeVotosnulos ? 'bg-success d-inline-flex ':''}`}>Votos de Juanca:  {sumaDeVotosjuanca.toLocaleString()} votos</p>
           
            </div>
          </div>
        </div>
    </section>
            <div className="container">
                   <div className={Stylegeneral.scroll}>
                     <TablaConteo datos = {conteo ?? []} setconteo={setconteo}  />
              </div>
                    
            </div>
           
        </Fragment>
    )
}
export default ResultadoConteoPages;
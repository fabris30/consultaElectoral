import React, { Fragment, useEffect, useState } from "react";
import FilterComponent from "./component/FilterComponent";
import BuscarComponent from "./component/BuscarComponent";
import ResultadoComponent from "./component/ResultadoComponent";
import TablaComponent from "./component/TablaComponent";
import { filtro, filtrolugar, getElectores } from "../../Api/ApiMetodo";
import Stylegeneral from '../../scss/general.module.scss'
import PaginadorComponent from "./component/PaginadorComponent";
const TablaPages = () => {
 const [electores,setElectores]=useState([]);
 const [selectedOptionlugar, setSelectedOptionlugar] = useState(null);
 const [selectedOptionmesa, setSelectedOptionmesa] = useState(null);
 const [selectedOptiongrupo, setSelectedOptiongrupo] = useState(null);
 const [elector,setElector]=useState([]);
 const [currentPage, setCurrentPage] = useState(0);
  const perPage = 20;
 const optionsgrupo = [
    { value: true, label: 'JOSE FELIX' },
    { value: false, label: 'Contrarios' }
  ]
 
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
    useEffect(()=>{
    getElectores().then(response => {
   
      setElectores(response?.data?.electores)
      
    })
        .catch(error =>console.error(error));
    },[])
   
   //metodo de filtro 
    useEffect(()=>{
      filtrodata();
        },[selectedOptiongrupo,selectedOptionlugar,selectedOptionmesa])

 const filtrodata=()=>{
        filtro({grupo:selectedOptiongrupo,lugar: selectedOptionlugar,mesa:selectedOptionmesa}).then(response =>
             {
                if(response?.electores){
                    if(response?.electores.length >0){
                        setElectores(response?.electores)
                    } else setElectores(response?.electores)
                    
                }
              
             })
        .catch(error =>console.error(error));
 } 
    const pageCount= Math.ceil(electores.length / perPage);
    const offset = currentPage * perPage;
   const datosOptimizados=electores.slice(offset,offset + perPage);
   console.log(pageCount)
    return (
        <Fragment>
            <section>
                <div className="container py-3">
                        <BuscarComponent elector={elector} setElector={setElector} cantidad={elector?.length}/>
                </div>
            </section>
            <section>
                <div className="container pb-3">
                    <div className="row gy-3">
                   
                      <div className="col-12 col-sm-6 col-lg-4  col-xl-3">
                        <FilterComponent nombre='Consultar por Grupo'  options={optionsgrupo} styleGrupo="text-white" capOpcions={setSelectedOptiongrupo} selectedOption={selectedOptiongrupo}/>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-4  col-xl-3">
                          <FilterComponent nombre='Consultar por Zona'  options={optionslugar} styleGrupo="text-white" capOpcions={setSelectedOptionlugar} selectedOption={selectedOptionlugar}/>
                        </div>
                        
                        <div className="col-12 col-sm-6 col-lg-4 col-xl-3 ">
                             <FilterComponent nombre='Consultar por Mesa' options={optionsmesa} styleGrupo="text-white" capOpcions={setSelectedOptionmesa} selectedOption={selectedOptionmesa}/>
                        </div>
                       <div className="col-12 col-sm-6 col-lg-4  col-xl-3">
                         <ResultadoComponent cantidad={electores?.length} />
                       </div>
                   
                    </div>
                </div>
            </section>
            <section>
              <div className="container">
                 {pageCount > 1 ? <PaginadorComponent pageCount={pageCount} setCurrentPage={setCurrentPage} />:null}
              </div>
            </section>

            <section>
                <div className="container">
                    <div className={Stylegeneral.scroll}>
                        <TablaComponent datos = {datosOptimizados} elector={elector ?? []}  />
                    </div>
                    
                </div>
            </section> 

        </Fragment>
    )
}
export default TablaPages;
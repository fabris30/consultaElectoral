import React, {Fragment,useEffect,useState} from "react";
import TablaComponent from "../Tabla/component/TablaComponent.jsx";
import Stylegeneral from '../../scss/general.module.scss'
import TablaConteo from "./component/TablaConteo.jsx";
import { getConteo } from "../../Api/ApiConteo.js";
const ResultadoConteoPages = () => {
    const [conteo,setconteo]=useState([]);
    const [candidato,setcandidato]=useState([]);

    useEffect(()=>{
        getConteo().then(response => setconteo(response?.data.conteo))
            .catch(error =>console.error(error));
        },[])
    return (
        <Fragment>
            <div className="container">
                   <div className={Stylegeneral.scroll}>
                     <TablaConteo datos = {conteo ?? []} setconteo={setconteo}  />
              </div>
                    
            </div>
           
        </Fragment>
    )
}
export default ResultadoConteoPages;
import React, { Fragment } from "react";
import LoginComponent from "../../components/LoginComponent";
import RegistroComponent from "../Registro/component/RegistroComponent";
import TablaComponent from "../Tabla/component/TablaComponent";
import BuscarComponent from "../Tabla/component/BuscarComponent";
import FilterComponent from "../Tabla/component/FilterComponent";
import ResultadoComponent from "../Tabla/component/ResultadoComponent";
const BasePages = () => {

    return (

        <Fragment>
            <div className="container">
                <LoginComponent />
                <RegistroComponent />
                <div className="d-flex align-items-center justify-content-between ">
                    <BuscarComponent />
                    <FilterComponent nombre='buscar por zona' />
                    <FilterComponent nombre='buscar por mesa'/>
                    <ResultadoComponent />
                </div>

                <TablaComponent />


            </div>

        </Fragment>
    )
}
export default BasePages;
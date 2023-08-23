import React, { Fragment } from "react";
import FilterComponent from "./component/FilterComponent";
import BuscarComponent from "./component/BuscarComponent";
import ResultadoComponent from "./component/ResultadoComponent";
import TablaComponent from "./component/TablaComponent";
const TablaPages = () => {
    return (
        <Fragment>


            <section>
                <div className="container">
                  
                        <BuscarComponent />
                </div>
            </section>
            <section>
                <div className="container">
                    <div className="d-flex flex-column flex-md-row align-items-center justify-content-between">
                        <FilterComponent nombre='Consultar por Zona'/>
                        <FilterComponent nombre='Consultar por Meza'/>
                        <ResultadoComponent />
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <TablaComponent />
                </div>
            </section>

        </Fragment>
    )
}
export default TablaPages;
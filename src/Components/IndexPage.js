import React, { Component } from 'react'

export default class IndexPage extends Component {
    render() {
        return (
            <div id = "a" className="container-fluid" style={{ minHeight: "85vh", width: "100% "}} >
           
                <h2 >Página de Consulta</h2>
                <p className="lead"><i>Página web que facilita la visualización del reporte de ventas.</i> </p>
                <img className="fluid" style={{ width: "65%"}} src="https://fenixcorp.net/wp-content/uploads/2021/03/dashboard-lanzador-2048x1170.png" alt="Fenix - Corp - Computador" />
            </div>
        )
    }
}

import React, { Component } from 'react'

export default class IndexPage extends Component {
    render() {
        return (
            <div style={{ backgroundColor: "rgb(31, 56, 175 )", color: "white" }}>
                <h2 style={{ paddingTop: "150px" }}>Página de Consulta</h2>
                <p className="lead"><i>Página web que facilita la visualización del reporte de ventas.</i> </p>
                <img className="fluid" style={{ width: "80%" }} src="https://fenixcorp.net/wp-content/uploads/2021/03/dashboard-lanzador-2048x1170.png" alt="Fenix - Corp - Computador" />
            </div>
        )
    }
}

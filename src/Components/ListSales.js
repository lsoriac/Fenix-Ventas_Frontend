import React, { Component } from 'react'
import axios from 'axios'
//import { Link } from 'react-router-dom'

export default class ListSales extends Component {
    state = {
        list_sales: [],

    }

    getSales = async () => {
        const res = await axios.get('http://localhost:4000/ventas')
        this.setState({ list_sales: res.data.registros })
        console.log(res.data.registros);
    }

    test = async () => {
        console.log(this.state.list_sales);
    }
    //Allow show function, pedir datos
    async componentDidMount() {
        this.getSales();
    }
    render() {
        return (
            <div className="container">
                <h1>VENTAS FENIX</h1>
                <div className="table-responsive" >
                    <table className= "table table-striped">
                    <caption>Lista de Ventas</caption>
                        <thead>
                        
                            <tr>
                                <th scope="col">codclie</th>
                                <th scope="col">cliente</th>
                                <th scope="col">emision</th>
                                <th scope="col">vence</th>
                                <th scope="col">totalventas</th>

                                <th scope="col">val</th>
                                <th scope="col">porcentajetotal</th>
                                <th scope="col">cantidadlog</th>
                                <th scope="col">cienlog</th>
                                <th scope="col">porcentajedv</th>

                                <th scope="col">pndev</th>
                                <th scope="col">dias</th>
                                <th scope="col">diastot</th>
                                <th scope="col">scoring</th>
                                <th scope="col">email</th>

                                <th scope="col">tlf1</th>
                                <th scope="col">cod_acti</th>
                                <th scope="col">nomcli2</th>
                                <th scope="col">cxc</th>
                       
                            </tr>
                        </thead>
                        <tbody>
                        
                        {
                                this.state.list_sales.map(sales =>
                                    (<tr key={sales.codcli}>

                                        <td>{sales.codcli} </td>
                                        <td>{sales.cliente} </td>
                                        <td>{sales.emision} </td>
                                        <td>{sales.vence} </td>
                                        <td>{sales.totalventas} </td>

                                        <td>{sales.val} </td>
                                        <td>{sales.porcentajetotal} </td>
                                        <td>{sales.cantidadlog} </td>
                                        <td>{sales.cienlog} </td>
                                        <td>{sales.porcentajedv} </td>

                                        <td>{sales.pndev} </td>
                                        <td>{sales.dias} </td>
                                        <td>{sales.diastot} </td>
                                        <td>{sales.scoring} </td>
                                        <td>{sales.email} </td>

                                        <td>{sales.tlf1} </td>
                                        <td>{sales.cod_acti} </td>
                                        <td>{sales.nomcli2} </td>
                                        <td>{sales.cxc}</td>
                                        
                                    
                                    </tr>))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
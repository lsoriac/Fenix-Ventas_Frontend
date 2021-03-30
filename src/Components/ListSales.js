import React, { Component } from 'react'
import axios from 'axios'
import { MDBDataTable } from 'mdbreact';
//import { Link } from 'react-router-dom'

export default class ListSales extends Component {
    state = {
        list_sales: [],
        search: '',
        params: {},
        user_session: ''
    }
    getSales = async () => {
        //recover from local Storage or session Storage
        if (localStorage.getItem('login') || sessionStorage.getItem('login')) {
            let data={}
            if (localStorage.getItem('login')) {
                data = JSON.parse(localStorage.getItem('login'))
            }else{
                data = JSON.parse(sessionStorage.getItem('login'))
            }
            //recover token
            var headers = {
                token: data.token
            }
            //set user
            this.setState({user_session: "Bienvenido "+(data.user[0].nombre)})
            //query to backend -  need token verify
            const res = await axios.get('http://localhost:4000/ventas', { headers })
            this.setState({ list_sales: res.data.registros })
            //style datatable
            const dat = {
                columns: [
                    { label: 'codcli', field: 'codcli', sort: 'asc', width: 500 },
                    { label: 'cliente', field: 'cliente' },
                    { label: 'emision', field: 'emision' },
                    { label: 'vence', field: 'vence' },
                    { label: 'totalventas', field: 'totalventas' },

                    { label: 'val', field: 'val' },
                    { label: 'porcentajetotal', field: 'porcentajetotal' },
                    { label: 'cantidadlog', field: 'cantidadlog' },
                    { label: 'cienlog', field: 'cienlog' },
                    { label: 'porcentajedv', field: 'porcentajedv' },

                    { label: 'pndev', field: 'pndev' },
                    { label: 'dias', field: 'dias' },
                    { label: 'diastot', field: 'diastot' },
                    { label: 'scoring', field: 'scoring' },
                    { label: 'email', field: 'email' },

                    { label: 'tlf1', field: 'tlf1' },
                    { label: 'cod_acti', field: 'cod_acti' },
                    { label: 'nomcli2', field: 'nomcli2' },
                    { label: 'cxc', field: 'cxc' }
                ],
                rows: res.data.registros
            }
            this.setState({ params: dat })
        } else {
            //posible message to send
            window.alert("El usuario no tiene permisos para acceder a esta operación")
            window.location.href = '/'
        }
    }

    //Allow show function
    async componentDidMount() {
        //obtain data
        this.getSales();
    }

    render() {
        return (
            <div className="container p-4" style={{ minHeight: "85vh" }}>
                <h1>VENTAS FENIX</h1>
                <div className="table-responsive" >
                    <div style={{textAlign:"right", color:"green"}}>
                    <svg id="check" xmlns="http://www.w3.org/2000/svg" width="20" fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
                                        <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                                    </svg>
                        <label >{this.state.user_session}</label>
                    </div>
                    
                    <MDBDataTable
                        hover
                        entriesOptions={[5, 10, 20, 25]}
                        entries={5}
                        striped
                        small
                        data={this.state.params} />
                </div>
            </div>
        )
    }
}
import React, { Component } from 'react'
import axios from 'axios'
import DataTable from 'react-data-table-component'
import DataTableExtensions from 'react-data-table-component-extensions';
import 'react-data-table-component-extensions/dist/index.css';

import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

export default class ListSales extends Component {
    BACKEND_URL = "https://fenix-ventas-backend.herokuapp.com"
    //BACKEND_URL = "http://localhost:4000"
    state = {
        cont: 0,
        list_sales: [],
        params: {},
        user_session: '',
        optionsPagination: { rowsPerPageText: "Filas por Página", rangeSeparatorText: "de", selectAllRowsItem: true, selectAllRowsItemText: "Todos" },
    }
    getSales = async () => {
        //recover from local Storage or session Storage
        if (localStorage.getItem('login') || sessionStorage.getItem('login')) {
            let data = {}
            if (localStorage.getItem('login')) {
                data = JSON.parse(localStorage.getItem('login'))
            } else {
                data = JSON.parse(sessionStorage.getItem('login'))
            }
            //recover token
            var headers = {
                token: data.token
            }
            //set user
            this.setState({ user_session: "Bienvenido " + (data.user[0].nombre) })
            //query to backend -  need token verify
            const res = await axios.get(this.BACKEND_URL + '/ventas', { headers })
            this.setState({ list_sales: res.data.registros })
            //style datatable
            const dat = {
                columns: [
                    { name: 'Código', selector: 'codcli', sortable: true, width: "80px", compact: true, },
                    { name: 'Cliente', selector: 'cliente', sortable: true, width: "300px", compact: true, wrap: true },
                    { name: 'Emisión', selector: 'emision', sortable: true, width: "80px", compact: true },
                    { name: 'Vence', selector: 'vence', sortable: true, width: "80px", compact: true },
                    { name: 'Tot.Ventas', selector: 'totalventas', sortable: true, right: true, width: "70px", compact: true },

                    { name: 'Val', selector: 'val', sortable: true, right: true, width: "70px", compact: true },
                    { name: '% Total', selector: 'porcentajetotal', sortable: true, right: true, width: "70px", compact: true },
                    { name: 'Cant. log', selector: 'cantidadlog', sortable: true, right: true, width: "80px", compact: true },
                    { name: 'Cienlog', selector: 'cienlog', sortable: true, right: true, width: "80px", compact: true },
                    { name: '% Dv', selector: 'porcentajedv', sortable: true, right: true, width: "80px", compact: true },

                    { name: 'Pndev', selector: 'pndev', sortable: true, right: true, width: "80px", compact: true },
                    { name: 'Días', selector: 'dias', right: true, width: "80px", compact: true },
                    { name: 'Días Tot.', selector: 'diastot', sortable: true, right: true, width: "80px", compact: true },
                    { name: 'Scoring', selector: 'scoring', sortable: true, right: true, width: "80px", compact: true },
                    { name: 'Email', selector: 'email', sortable: true, width: "100px", cell: row => <Popup style={{ backgroundColor: "rgb(0,123,255)"  }} trigger={<button style={{ fontSize:"11px", color: "white", borderColor: "rgb(0,123,255)", backgroundColor: "rgb(0,123,255)" }}> Ver más..</button>} position="top center">
                    <div>{row.email}</div>
                </Popup> },

                    { name: 'Télf.', selector: 'tlf1', sortable: true, wrap: true, width: "98px", compact: true },
                    { name: 'Cod. Acti', selector: 'cod_acti', sortable: true, width: "90px", compact: true },
                    { name: 'Nom. Cli2', selector: 'nomcli2', sortable: true, width: "100px", compact: true , cell: row => <Popup style={{ backgroundColor: "rgb(0,123,255)"  }} trigger={<button style={{ fontSize:"11px", color: "white", borderColor: "rgb(0,123,255)", backgroundColor: "rgb(0,123,255)" }}> Ver más..</button>} position="top center">
                    <div>{row.nomcli2}</div>
                </Popup >},
                    { name: 'Cxc', selector: 'cxc', sortable: true, width: "80px", right: true, }
                ],
                data: res.data.registros
            }
            this.setState({ params: dat, cont: 1 })
        } else {
            //posible message to send
            window.alert("El usuario no tiene permisos para acceder a esta operación")
            window.location.href = '/'
        }
    }

    changeOptions(aux) {
        if (document.getElementsByTagName('select')[0] !== undefined) {
            if (aux === 1) {
                document.getElementsByTagName('select')[0].innerHTML = "<select aria-label='Filas por Página' class='sc-ivKoCB bHsGCD'><option value='5'>5</option><option value='10'>10</option><option value='20'>20</option><option value='30'>30</option></select>";
            }
        }
        this.setState({ cont: aux + 1 })
    }

    //Allow show function
    async componentDidMount() {
        //obtain data
        this.getSales();
    }

    render() {
        return (
            
            <div className="container-fluid" style={{ minHeight: "85vh", width: "95%" }} >
                <div className="table-responsive" >
                    <div style={{ textAlign: "right", color: "	rgb(31, 56, 175 )"}}>
                        <svg id="check" xmlns="http://www.w3.org/2000/svg" width="20" fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
                            <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                        </svg>
                        <label>{this.state.user_session} </label>
                    </div>
                    
                    <div onClick={() => this.changeOptions(this.state.cont)}>
                        <DataTableExtensions print={false} export={false} filterPlaceholder={"Buscar"}{...this.state.params} >
                            <DataTable
                                subHeader
                                subHeaderAlign={"center"}
                                subHeaderComponent={[<h4 key="tit" style={{ color: "rgb(31, 56, 175 )" }}>Reporte Ventas</h4>]}
                                striped
                                fixedHeader
                                fixedHeaderScrollHeight={"1500px"}

                                pagination

                                paginationPerPage={5}
                                paginationRowsPerPageOptions={[5, 10, 20, 30]}
                                paginationComponentOptions={this.state.optionsPagination}
                            />
                        </DataTableExtensions>
                    </div>
                </div>
            </div>
        )
    }
}
import React, { Component } from 'react'
import axios from 'axios'
import DataTable from 'react-data-table-component'
import DataTableExtensions from 'react-data-table-component-extensions';
import 'react-data-table-component-extensions/dist/index.css';

export default class ListSales extends Component {

    state = {
        cont: 0,
        list_sales: [],
        params: {},
        user_session: '',
        optionsPagination: { rowsPerPageText: "Filas por Página", rangeSeparatorText: "de", selectAllRowsItem: true, selectAllRowsItemText: "Todos" }

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
            const res = await axios.get('http://localhost:4000/ventas', { headers })
            this.setState({ list_sales: res.data.registros })
            //style datatable
            const dat = {
                columns: [
                    { name: 'codcli', selector: 'codcli', sortable: true, grow: "6" },
                    { name: 'cliente', selector: 'cliente', sortable: true, grow: "6", minWidth: '300px', wrap: true },
                    { name: 'emision', selector: 'emision', sortable: true },
                    { name: 'vence', selector: 'vence', sortable: true },
                    { name: 'totalventas', selector: 'totalventas', sortable: true, grow: "6" },

                    { name: 'val', selector: 'val', sortable: true, grow: "6" },
                    { name: 'porcentajetotal', selector: 'porcentajetotal', sortable: true, grow: "6" },
                    { name: 'cantidadlog', selector: 'cantidadlog', sortable: true, grow: "6" },
                    { name: 'cienlog', selector: 'cienlog', sortable: true, grow: "6" },
                    { name: 'porcentajedv', selector: 'porcentajedv', sortable: true, grow: "6" },

                    { name: 'pndev', selector: 'pndev', sortable: true, grow: "6" },
                    { name: 'dias', selector: 'dias' },
                    { name: 'diastot', selector: 'diastot', sortable: true },
                    { name: 'scoring', selector: 'scoring', sortable: true, grow: "6" },
                    { name: 'email', selector: 'email', sortable: true, grow: "6", minWidth: '400px', wrap: true },

                    { name: 'tlf1', selector: 'tlf1', sortable: true, grow: "6", wrap: true },
                    { name: 'cod_acti', selector: 'cod_acti', sortable: true, wrap: true, minWidth: '150px' },
                    { name: 'nomcli2', selector: 'nomcli2', sortable: true, grow: "6", minWidth: '300px', wrap: true },
                    { name: 'cxc', selector: 'cxc', sortable: true, grow: "6" }
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
            <div className="container p-4" style={{ minHeight: "85vh" }} >
                <h1>VENTAS FENIX</h1>
                <div className="table-responsive" >
                    <div style={{ textAlign: "right", color: "blue" }}>
                        <svg id="check" xmlns="http://www.w3.org/2000/svg" width="20" fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
                            <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                        </svg>
                        <label>{this.state.user_session} </label>
                    </div>
                    <div onClick={() => this.changeOptions(this.state.cont)}>
                        <DataTableExtensions print={false} export={false} filterPlaceholder={"Buscar"}{...this.state.params} >

                            <DataTable

                                title={"Ventas"}
                                striped
                                fixedHeader
                                fixedHeaderScrollHeight={"450px"}

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
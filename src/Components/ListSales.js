import React, { Component } from 'react'
import axios from 'axios'
import { MDBDataTable } from 'mdbreact';
//import { Link } from 'react-router-dom'

export default class ListSales extends Component {
    state = {
        list_sales: [],
        search: '',
        params: {}
    }
    getSales = async () => {
        //recover from local Storage
        if (localStorage.getItem('login')) {
            let datas = JSON.parse(localStorage.getItem('login'))
            var headers = {
                token: datas.token
            }
            const res = await axios.get('http://localhost:4000/ventas', { headers })
            this.setState({ list_sales: res.data.registros })
            const dat = {
                columns: [
                  {label: 'codcli',field: 'codcli',sort: 'asc',width: 500},
                  {label: 'cliente',field: 'cliente'},
                  {label: 'emision',field: 'emision'},
                  {label: 'vence',field: 'vence'},
                  {label: 'totalventas',field: 'totalventas'},

                  {label: 'val',field: 'val'},
                  {label: 'porcentajetotal',field: 'porcentajetotal'},
                  {label: 'cantidadlog',field: 'cantidadlog'},
                  {label: 'cienlog',field: 'cienlog'},
                  {label: 'porcentajedv',field: 'porcentajedv'},

                  {label: 'pndev',field: 'pndev'},
                  {label: 'dias',field: 'dias'},
                  {label: 'diastot',field: 'diastot'},
                  {label: 'scoring',field: 'scoring'},
                  {label: 'email',field: 'email'},

                  {label: 'tlf1',field: 'tlf1'},
                  {label: 'cod_acti',field: 'cod_acti'},
                  {label: 'nomcli2',field: 'nomcli2'},
                  {label: 'cxc',field: 'cxc'}
                ],
                rows:   res.data.registros   
            }
            this.setState({params: dat})
        } else {
            //posible message to send
            window.alert("El usuario no tiene permisos para acceder a esta operación")
            window.location.href = '/'
        }
    }

    filterSearch = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
        console.log(this.state.params);
    }
    //Allow show function
    async componentDidMount() {
        this.getSales();    
    }
    
    render() {
        return (
            <div className="container p-4" style = {{minHeight: "85vh"}}>
                <h1>VENTAS FENIX</h1>
                <div className="table-responsive" >
                    <MDBDataTable 
                    hover 
                    entriesOptions={[5, 10, 20, 25]} 
                    entries={5}
                    striped
                    small 
                    data={this.state.params}  />
                </div>
            </div>
        )
    }
}
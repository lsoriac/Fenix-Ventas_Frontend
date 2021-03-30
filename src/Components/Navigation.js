import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navigation extends Component {

    async componentDidMount(){
        let dat =null
        //verify if login exists
        if (localStorage.getItem('login')) {
            dat= JSON.parse(localStorage.getItem('login'))
            //console.log(dat.user[0].nombre); 
        }
        console.log(dat);
        if (dat === null) {
            document.getElementById('register').style.display = 'Block'
            document.getElementById('login').style.display = 'Block'
            document.getElementById('sales').style.display = 'None'
            document.getElementById('close').style.display = 'None'
        }else{
            document.getElementById('register').style.display = 'None'
            document.getElementById('login').style.display = 'None'
            document.getElementById('sales').style.display = 'Block'
            document.getElementById('close').style.display = 'Block'
        }
    }

    onClickClose = async (id) => {
        if (localStorage.getItem('login') || sessionStorage.getItem('login')) {
            if (localStorage.getItem('login')) {
                localStorage.removeItem('login');   
            }else{
                sessionStorage.removeItem('login');   
            }
        }else{
            //window.alert("El usuario no ha iniciado sesión");   
        }   
       window.location.href = '/'
    }
        
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link className="navbar-brand" to="/">Ventas Fenix
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active" id="register">
                            <Link className="navbar-brand" to="/registro">Registrarse
                        </Link>
                        </li>
                        <li className="nav-item" id="login">
                            <Link className="navbar-brand" to="/iniciar-sesion">Iniciar Sesión
                        </Link>
                        </li>
                        <li className="nav-item active" id="sales">
                            <Link className="navbar-brand" to="/ventas">Ventas
                        </Link>
                        </li>
                        <li className="nav-item" id="close" onClick={() => this.onClickClose()}>
                        <Link className="navbar-brand" to="/">Cerrar Sesión
                        </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navigation extends Component {

    async componentDidMount(){
        let dat =null
        //verify if login exists on localStorage
        if (localStorage.getItem('login')) {
            dat= JSON.parse(localStorage.getItem('login'))
        }
        //verify if login exists on session storage
        if (sessionStorage.getItem('login')) {
            dat= JSON.parse(sessionStorage.getItem('login'))
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
            <nav className="navbar navbar-expand-lg navbar-dark" style={{backgroundColor: "rgb(0,0,0)"}}>
                <Link className="navbar-brand" to="/"><img src="https://fenixcorp.net/wp-content/uploads/2019/08/logoblanco-150x63.png" alt=""/>
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <svg xmlns="http://www.w3.org/2000/svg" width="27" fill="currentColor" className="bi bi-caret-down-square" viewBox="0 0 16 16">
  <path d="M3.626 6.832A.5.5 0 0 1 4 6h8a.5.5 0 0 1 .374.832l-4 4.5a.5.5 0 0 1-.748 0l-4-4.5z"/>
  <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2z"/>
</svg>
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

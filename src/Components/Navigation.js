import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navigation extends Component {
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
                        <li className="nav-item active" id="product">
                            <Link className="navbar-brand" to="/">Test
                        </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default class FormRecoverPass extends Component {
    state = {
        email: '',
        desc: 'Información de Seguridad',
        content: 'Para obtener una nueva contraseña, ingrese el correo electrónico con el que fue registrado ',
        width_r: ''
    }

    onChangeInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = async e => {
        e.preventDefault();
        const emailSend = {
            email: this.state.email,
        }
        try {
            const res = await axios.post('http://localhost:4000/recover', emailSend)
            if (res.data.status) {
                document.getElementById('h').style.display = 'None'
                this.setState({ desc: "Información de Seguridad Actualizada.", content: "Su nueva contraseña fue enviada al correo." })
                document.getElementById('message').style.display = 'Block'
                document.getElementById('log').style.display = 'Block'
                document.getElementById('send').style.display = 'None'
            }
        } catch (e) {
            this.setState({ desc: "No se pude actualizar su información de seguridad.", content: "El correo ingresado no está registrado." })
            document.getElementById('email').value = ''
            document.getElementById('message').style.display = 'Block'
            document.getElementById('log').style.display = 'None'
            document.getElementById('send').style.display = 'Block'
        }
    }

    async componentDidMount() {
        document.getElementById("navigation").style.display = "none"
        document.getElementById('log').style.display = 'None'

        this.setState({ width_r: (document.getElementById("c").clientHeight * 0.6.toString() + "px") })
    }
    render() {
        return (
            <div id="c" className="container-fluid" style={{ minHeight: "85vh", width: this.state.width_r }} >
                <div className="container p-4" style={{ width: "100%", marginTop: "100px" }}>
                    <div className="card text-center">
                        <div className="card-header">
                            <h5>Recuperar Contraseña</h5>
                        </div>
                        <form onSubmit={this.onSubmit}>
                            <div className="card-body">
                                <div id="message" style={{ backgroundColor: "rgb(240,240,240)", fontSize: "12px" }} >
                                    <h5>{this.state.desc}</h5>
                                    <p>{this.state.content}</p>
                                </div>
                                <div className="input-group mb-2" style={{ marginTop: "30px" }} id="h">
                                    <div className="input-group-prepend" >
                                        <div className="input-group-text"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="rgb(0,0,0)" className="bi bi-envelope-fill" viewBox="0 0 16 16">
                                            <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z" />
                                        </svg></div>
                                    </div>
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        className="form-control"
                                        onChange={this.onChangeInput}
                                        placeholder="Correo electrónico" />
                                </div>
                                <div id="log" style={{ marginTop: "40px" }} >
                                    <Link to="/iniciar-sesion"><input type="button" className="btn btn-primary btn-block" value="Iniciar Sesión" />
                                    </Link>
                                </div>

                                <button style={{ marginTop: "40px" }} id="send" type="submit" className="btn btn-primary btn-block">Enviar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

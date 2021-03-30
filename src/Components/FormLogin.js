import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default class FormLogin extends Component {
    state = {
        user: '',
        pass_user: ''
    }

    //event chance typing
    onChangeInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = async e => {
        //do no reset when submmit form
        e.preventDefault()
        const login = {
            usuario: this.state.user,
            contrasena: this.state.pass_user
        }
        let error = false
        let data = {}
        let res = {}
        //query to backend
        try {
            res = await axios.post("http://localhost:4000/login", login)
        } catch (err) {
            error = true
            //console.log(err.response);
            this.setState({
                user: "",
                pass_user: ""
            })
        }
        //no errors
        if (error === false) {
            data = {
                token: res.data.token,
                user: res.data.usuario
            }
            //insert data on local Storage or session Storage
            if(document.getElementById("session").checked){
                localStorage.setItem('login', JSON.stringify(data))
            }else{ 
                sessionStorage.setItem('login', JSON.stringify(data))
            }
            //redirect to  sales page
            window.location.href = 'http://localhost:3000/ventas'
        } else {
            //show login error
            document.getElementById('err_log').style.display = 'Block'
            this.setState({
                user: '',
                pass_user: ''
            })
            //set input values
            document.getElementById("user").value = ''
            document.getElementById("pass_user").value = ''
        }
    }

    async componentDidMount() {
        document.getElementById('err_log').style.display = 'None'
    }

    render() {
        return (
            <div className="container p-4" style={{ height: "200px", width: "310px", marginTop: "150px" }}>
                <div className="card text-center" >
                    <div className="card-header">
                        <h4>Login</h4>
                    </div>
                    <form onSubmit={this.onSubmit}>
                        <div className="card-body">
                            <div className="input-group mb-2">
                                <div className="input-group-prepend">
                                    <div className="input-group-text" ><svg xmlns="http://www.w3.org/2000/svg" width="24" fillRule="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                                        <path fillrulee="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                                    </svg></div>
                                </div>
                                <input
                                    id="user"
                                    name="user"
                                    type="text"
                                    className="form-control"
                                    value={this.state.user}
                                    onChange={this.onChangeInput}
                                    placeholder="Usuario" />
                            </div>

                            <div className="input-group mb-2">
                                <div className="input-group-prepend">
                                    <div className="input-group-text" ><svg xmlns="http://www.w3.org/2000/svg" width="24" fill="currentColor" className="bi bi-key-fill" viewBox="0 0 16 16">
                                        <path d="M3.5 11.5a3.5 3.5 0 1 1 3.163-5H14L15.5 8 14 9.5l-1-1-1 1-1-1-1 1-1-1-1 1H6.663a3.5 3.5 0 0 1-3.163 2zM2.5 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                                    </svg></div>
                                </div>
                                <input
                                    id="pass_user"
                                    name="pass_user"
                                    type="password"
                                    value={this.state.pass_user}
                                    className="form-control"
                                    onChange={this.onChangeInput}
                                    placeholder="Contraseña" />
                            </div>
                            {/*error*/}
                            <div id="err_log" style={{ color: "red" }}>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
                                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                                    </svg>
                                    <small>Usuario o contraseña incorrecto</small>
                                </span>
                            </div>
                            {/*redirect*/}
                            <span style={{ fontSize: "11px" }}>
                                <label>No tiene cuenta</label>
                                <Link to="/registro"> Cree una</Link>
                            </span>
                            {/*Decide local Storage or session Storage */}
                            <div className="form-check" style={{ marginTop: "50px", marginBottom: "25px" }}>
                                <input className="form-check-input" type="checkbox" id="session" />
                                <label className="form-check-label" htmlFor="session">
                                    <span ><small > Mantener la sesión iniciada</small></span>
                                </label>
                            </div>
                            <button type="submit" className="btn btn-primary btn-block">Ingresar</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

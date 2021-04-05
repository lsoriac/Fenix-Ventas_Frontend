import React, { Component } from 'react'
import axios from 'axios'

export default class FormRegister extends Component {
    state = {
        name_user: '',
        user: '',
        pass_user: '',
        pass_user_confirm: '',
        err_pass: 'Debe completar este campo',
        err_pass_user_confirm: 'Debe completar este campo'

    }

    //event chance typing
    onChangeInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })

        //Error control change
        if (e.target.name === "name_user") {
            //message err
            document.getElementById('name_user').style.borderColor = 'Green'
            document.getElementById('name_user_err').style.display = 'None'
        }
        if (e.target.name === "user") {
            //message err
            document.getElementById('user').style.borderColor = 'Green'
            document.getElementById('user_err').style.display = 'None'
        }
        if (e.target.name === "pass_user") {
            document.getElementById('pass_user').style.borderColor = 'Green'
            document.getElementById('pass_user_err').style.display = 'None'
            if (this.validSegurityPass(document.getElementById("pass_user").value)) {
                this.setState({ err_pass: "Verificado" })
                //icons svg
                document.getElementById('check').style.display = "Inline"
                document.getElementById('noCheck').style.display = "None"
                //message
                document.getElementById('pass_user_err').style.color = 'Green'
                document.getElementById('pass_user_err').style.display = 'Block'

            } else {
                //icons svg
                document.getElementById('check').style.display = "None"
                document.getElementById('noCheck').style.display = "Inline"
                //message err
                document.getElementById('pass_user_err').style.color = 'Red'
                document.getElementById('pass_user_err').style.display = 'Block'
            }
            this.validPassError()
        }
        if (e.target.name === "pass_user_confirm") {
            //message err
            document.getElementById('pass_user_confirm').style.borderColor = 'Green'
            document.getElementById('pass_user_confirm_err').style.display = 'None'
            this.validPassError()
        }
    }

    validPassError() {
        // valid or invalid visual err
        if (document.getElementById("pass_user").value === document.getElementById("pass_user_confirm").value) {
            document.getElementById('pass_user_confirm_err').style.display = 'None'
        } else {
            this.setState({ err_pass_user_confirm: 'Este campo debe ser igual a la contraseña ingresada' })
            document.getElementById('pass_user_confirm').style.borderColor = 'Red'
            document.getElementById('pass_user_confirm_err').style.display = 'Block'
        }
    }
    // validate segurity password 
    validSegurityPass(pass) {
        if (pass.length >= 8) {
            var upper = false;
            var lower = false;
            var num = false;
            var character = false;
            for (var i = 0; i < pass.length; i++) {
                if (pass.charCodeAt(i) >= 65 && pass.charCodeAt(i) <= 90) {
                    upper = true;
                }
                else if (pass.charCodeAt(i) >= 97 && pass.charCodeAt(i) <= 122) {
                    lower = true;
                }
                else if (pass.charCodeAt(i) >= 48 && pass.charCodeAt(i) <= 57) {
                    num = true;
                }
                else {
                    character = true;
                }
            }
            if (upper === false) {
                this.setState({ err_pass: "Debe incluír almenos 1 letra Mayúscula" })
            }
            if (lower === false) {
                this.setState({ err_pass: "Debe incluír almenos 1 letra Minúscula" })
            }
            if (num === false) {
                this.setState({ err_pass: "Debe incluír almenos 1 Número" })
            }
            if (character === false) {
                this.setState({ err_pass: "Debe incluír almenos 1 Símbolo" })
            }
            if (upper === true && lower === true && character === true && num === true) {
                return true;
            }
        } else {
            this.setState({ err_pass: "Mínimo de 8" })
        }
        return false;
    }

    async componentDidMount() {
        //hidden errors
        document.getElementById('name_user_err').style.display = 'None'
        document.getElementById('user_err').style.display = 'None'
        document.getElementById('pass_user_err').style.display = 'None'
        document.getElementById('pass_user_confirm_err').style.display = 'None'
        document.getElementById('check').style.display = "None"
    }

    onSubmit = async e => {
        //do no reset when submmit form
        e.preventDefault()
        if (this.state.name_user !== "" && this.state.user !== "" && this.state.pass_user !== "" && this.state.pass_user_confirm !== "") {
            if (this.state.pass_user === this.state.pass_user_confirm) {
                let newUser = {
                    nombre: this.state.name_user,
                    contrasena: this.state.pass_user,
                    usuario: this.state.user
                }
                //Query to backend - create new user
                const res = await axios.post("http://localhost:4000/register", newUser)
                console.log(res);
                window.location.href = '/'
            } else {
                //set input values
                document.getElementById("pass_user").value = ''
                document.getElementById("pass_user_confirm").value = ''
            }
        } else {
            //Error control
            if (this.state.name_user === "") {
                document.getElementById('name_user_err').style.display = 'Block'
                document.getElementById('name_user').style.borderColor = 'Red'
            }
            if (this.state.user === "") {
                document.getElementById('user_err').style.display = 'Block'
                document.getElementById('user').style.borderColor = 'Red'
            }
            if (this.state.pass_user === "") {
                document.getElementById('pass_user_err').style.display = 'Block'
                document.getElementById('pass_user').style.borderColor = 'Red'
            }
            if (this.state.pass_user_confirm === "") {
                document.getElementById('pass_user_confirm_err').style.display = 'Block'
                document.getElementById('pass_user_confirm').style.borderColor = 'Red'
            }
        }
    }

    render() {
        return (
            <div className="container p-4" style={{ height: "200px", width: "322px", marginTop: "150px", marginBottom: "370px" }}>
                <div className="card text-center" >
                    <div className="card-header">
                        <h4>Formulario Registro</h4>
                    </div>
                    <form onSubmit={this.onSubmit} >
                        <div className="card-body" >
                            <div className="input-group mb-2" style={{ marginTop: "30px" }} >
                                <div className="input-group-prepend">
                                    <div className="input-group-text"><svg xmlns="http://www.w3.org/2000/svg" width="24" fill="rgb(0,0,0)" className="bi bi-person-circle" viewBox="0 0 16 16">
                                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                                        <path fillrulee="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                                    </svg></div>
                                </div>
                                <input
                                    id="name_user"
                                    name="name_user"
                                    type="text"
                                    className="form-control"
                                    onChange={this.onChangeInput}
                                    placeholder="Nombre" />
                            </div>
                            {/*error 1*/}
                            <div id="name_user_err" style={{ color: "red" }}>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16" >
                                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                                    </svg>
                                    <small>Debe completar este campo</small>
                                </span>
                            </div>

                            <div className="input-group mb-2" >
                                <div className="input-group-prepend">
                                    <div className="input-group-text"> <svg xmlns="http://www.w3.org/2000/svg" width="24" fill="rgb(0,0,0)" className="bi bi-person-check-fill" viewBox="0 0 16 16">
                                        <path fillrulee="evenodd" d="M15.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L12.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z" />
                                        <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                    </svg></div>
                                </div>
                                <input
                                    id="user"
                                    name="user"
                                    type="text"
                                    className="form-control"
                                    onChange={this.onChangeInput}
                                    placeholder="Usuario" />
                            </div>
                            {/*error 2*/}
                            <div id="user_err" style={{ color: "red" }}>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
                                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                                    </svg>
                                    <small>Debe completar este campo</small>
                                </span>
                            </div>

                            <div className="input-group mb-2 " >
                                <div className="input-group-prepend" >
                                    <div className="input-group-text"><svg xmlns="http://www.w3.org/2000/svg" width="24" fill="rgb(0,0,0)" className="bi bi-key" viewBox="0 0 16 16">
                                        <path d="M0 8a4 4 0 0 1 7.465-2H14a.5.5 0 0 1 .354.146l1.5 1.5a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0L13 9.207l-.646.647a.5.5 0 0 1-.708 0L11 9.207l-.646.647a.5.5 0 0 1-.708 0L9 9.207l-.646.647A.5.5 0 0 1 8 10h-.535A4 4 0 0 1 0 8zm4-3a3 3 0 1 0 2.712 4.285A.5.5 0 0 1 7.163 9h.63l.853-.854a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.793-.793-1-1h-6.63a.5.5 0 0 1-.451-.285A3 3 0 0 0 4 5z" />
                                        <path d="M4 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                                    </svg></div>
                                </div>
                                <input
                                    id="pass_user"
                                    name="pass_user"
                                    type="password"
                                    className="form-control"
                                    onChange={this.onChangeInput}
                                    placeholder="Contraseña"
                                />
                            </div>
                            {/*error 3*/}
                            <div id="pass_user_err" style={{ color: "red" }}>
                                <span>
                                    <svg id="noCheck" xmlns="http://www.w3.org/2000/svg" width="20" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
                                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                                    </svg>
                                    <svg id="check" xmlns="http://www.w3.org/2000/svg" width="20" fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
                                        <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                                    </svg>
                                    <small>{this.state.err_pass}</small>
                                </span>
                            </div>

                            <div className="input-group mb-2" >
                                <div className="input-group-prepend">
                                    <div className="input-group-text"> <svg xmlns="http://www.w3.org/2000/svg" width="24" fill="rgb(0,0,0)" className="bi bi-key-fill" viewBox="0 0 16 16">
                                        <path d="M3.5 11.5a3.5 3.5 0 1 1 3.163-5H14L15.5 8 14 9.5l-1-1-1 1-1-1-1 1-1-1-1 1H6.663a3.5 3.5 0 0 1-3.163 2zM2.5 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                                    </svg></div>
                                </div>
                                <input
                                    id="pass_user_confirm"
                                    name="pass_user_confirm"
                                    type="password"
                                    className="form-control"
                                    onChange={this.onChangeInput}
                                    placeholder=" Confirmar Contraseña"
                                />

                            </div>
                            {/*error 4*/}
                            <div id="pass_user_confirm_err" style={{ color: "red" }}>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
                                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                                    </svg>
                                    <small>{this.state.err_pass_user_confirm}</small>
                                </span>
                            </div>
                            <button style={{ marginTop: "30px" }} type="submit" className="btn btn-primary btn-block">Continuar</button>
                        </div>
                    </form>
                </div>
            </div>

        )
    }
}

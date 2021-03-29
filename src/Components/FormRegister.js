import React, { Component } from 'react'
import axios from 'axios'

export default class FormRegister extends Component {
    state = {
        name_user: '',
        pass_user: '',
        pass_user_confirm: '',
        user: ''
    }

    //event chance typing
    onChangeInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
        if(e.target.name ==="name_user"){
            document.getElementById('name_user').style.borderColor = 'Green'
            document.getElementById('name_user_err').style.display = 'None'
        }
       
        //console.log(e.target.value);
    }

    async componentDidMount() {
        document.getElementById('err_pass').style.display = 'None'
        document.getElementById('name_user_err').style.display = 'None'
        document.getElementById('err_pass').style.display = 'None'
        document.getElementById('err_pass').style.display = 'None'
        document.getElementById('err_pass').style.display = 'None'
    }

    onSubmit = async e => {
        //do no reset when submmit form
        e.preventDefault()
        if (this.state.pass_user === this.state.pass_user_confirm) {
            let newUser = {
                nombre: this.state.name_user,
                contrasena: this.state.pass_user,
                usuario: this.state.user
            }
            //CREATE
            const res = await axios.post("http://localhost:4000/register", newUser)
            console.log(res);
            window.location.href = '/'
        } else {
            document.getElementById('err_pass').style.display = 'Block'
            this.setState({
                pass_user: '',
                pass_user_confirm: ''
            })
            document.getElementById("pass_user").value = ''
            document.getElementById("pass_user_confirm").value = ''
            if (this.state.name_user === "") {
                document.getElementById('name_user_err').style.display = 'Block'
                document.getElementById('name_user').style.borderColor = 'Red'
            }
            /*
            if(this.state.user===""){
                document.getElementById('user_err').style.display = 'Block'
            }
            if(this.state.pass_user===""){
                document.getElementById('pass_user_err').style.display = 'Block'
            }
            if(this.state.pass_user_confirm===""){
                document.getElementById('pass_user_confirm_err').style.display = 'Block'
            }*/


        }


    }
    render() {
        return (
            <div className="container p-4" style={{ height: "200px", width: "350px", marginTop: "150px" }}>
                <div className="card text-center" >
                    <div className="card-header">
                        <h4>Formulario de Registro</h4>
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
                                    id="name_user"
                                    name="name_user"
                                    type="text"
                                    className="form-control"
                                    onChange={this.onChangeInput}
                                    placeholder="Nombre" />

                            </div>
                            <div id ="name_user_err" style={{color:"red"}}>
                                <small>Debe completar este campo</small>
                            </div>

                            <div className="input-group mb-2">
                                <div className="input-group-prepend">
                                    <div className="input-group-text"> <svg xmlns="http://www.w3.org/2000/svg" width="24" fillRule="currentColor" className="bi bi-person-check-fill" viewBox="0 0 16 16">
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

                            <div className="input-group mb-2 ">
                                <div className="input-group-prepend">
                                    <div className="input-group-text"><svg xmlns="http://www.w3.org/2000/svg" width="24" fill="currentColor" className="bi bi-key" viewBox="0 0 16 16">
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



                            <div className="input-group mb-2">
                                <div className="input-group-prepend">
                                    <div className="input-group-text"> <svg xmlns="http://www.w3.org/2000/svg" width="24" fill="currentColor" className="bi bi-key-fill" viewBox="0 0 16 16">
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


                            <div style={{ fontSize: "12px" }} id="err_pass" className="alert alert-danger alert-dismissible">
                                <button type="button" className="close" data-dismiss="alert">&times;</button>
                                <strong>Error!</strong> <small>Las contraseñas no coinciden.</small>
                            </div>
                            <button type="submit" className="btn btn-primary btn-block">Registrarse</button>
                        </div>
                    </form>
                </div>
            </div>

        )
    }
}

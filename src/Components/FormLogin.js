import React, { Component } from 'react'
import axios from 'axios'

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
        //console.log(e.target.value);
    }

    onSubmit = async e => {
        //do no reset when submmit form
        //do not reload on React app (No optimal)
        e.preventDefault()
        const login = {
            usuario: this.state.user,
            contrasena: this.state.pass_user
        }
        let error = false
        let data = {}
        let res={}
        try{
             res = await axios.post("http://localhost:4000/login", login)
        }catch(err){
            error= true
            //console.log(err.response);
            this.setState({
                user: "",
                pass_user: ""
            })
        }
        if (error===false){
            data = {
                token: res.data.token,
                user: res.data.usuario
            }
            localStorage.setItem('login', JSON.stringify(data))
            window.location.href = 'http://localhost:3000/ventas'
        }
        
    }

    render() {
        return (
            <div className="row" >
                <div className="container">
                    <h3>Login</h3>
                    <div className="card card-body">
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                Nombre
                                <input
                                    name="user"
                                    type="text"
                                    className="form-control"
                                    value={this.state.user}
                                    onChange={this.onChangeInput} 
                                    placeholder="Nombre Apellido"/>
                            </div>
                            <div className="form-group">
                                Contraseña
                                <input
                                    name="pass_user"
                                    type="password"
                                    value={this.state.pass_user}
                                    className="form-control"
                                    onChange={this.onChangeInput}
                                    placeholder="Password" />
                            </div>
                            <button type="submit" className="btn btn-primary">Ingresar</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

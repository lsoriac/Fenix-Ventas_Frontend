import React, { Component } from 'react'
import axios from 'axios'

export default class FormRegister extends Component {
    state = {
        name_user: '',
        pass_user: '',
        user: ''
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
        e.preventDefault()
        let newUser = {
                nombre: this.state.name_user,
                contrasena : this.state.pass_user,
                usuario: this.state.user
            }

        //CREATE

        // let headers = this.verifyAccessToken()
        
        const res = await axios.post("http://localhost:4000/register", newUser/*, { headers }*/)
        console.log(res);
    
        window.location.href = '/'
        
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
                                    name="name_user"
                                    type="text"
                                    className="form-control"
                                    onChange={this.onChangeInput} 
                                    placeholder="Nombre Apellido"/>
                            </div>
                            <div className="form-group">
                                Contraseña
                                <input
                                    name="pass_user"
                                    type="password"
                                    className="form-control"
                                    onChange={this.onChangeInput}
                                    placeholder="Password" />
                            </div> 
                            <div className="form-group">
                                Usuario
                                <input
                                    name="user"
                                    type="text"
                                    className="form-control"
                                    onChange={this.onChangeInput}
                                    placeholder="Usuario"/>
                            </div>
                            <button type="submit" className="btn btn-primary">Ingresar</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

import React, { Component } from 'react'

export default class FormLogin extends Component {
    state = {
        name_user: '',
        pass_user: '',
    }

     //event chance typing
     onChangeInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
        //console.log(e.target.value);
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
                                    value={this.state.name_user}
                                    onChange={this.onChangeInput} 
                                    placeholder="Nombre Apellido"/>
                            </div>
                            <div className="form-group">
                                Contraseña
                                <input
                                    name="pass_user"
                                    type="password"
                                    className="form-control"
                                    value={this.state.pass_user}
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

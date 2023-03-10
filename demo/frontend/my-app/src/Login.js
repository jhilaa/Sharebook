import React from 'react'
import {Link} from "react-router-dom";
import logo from './static/logo-tribean.png'
import './login.scss';

export default class Login extends React.Component {
constructor() {
    super()
    this.state = {userData: {}}
    }

    render () {
        return (
            <div className="login-container">
                <div>
                    <div>
                        <img src={logo} alt="'logo"/>
                    </div>
                    <div className="title">
                        Bienvenue
                    </div>
                    <div className="form-container">
                        <form onSubmit={this.onSubmit}>
                            <span>mail :</span>
                            <input type="text" className="form-control" name="email" onChange={this.handleChange}></input>
                            <span>password :</span>
                            <input type="password" className="form-control" name="password" onChange={this.handleChange}></input>
                            <div>
                                <input type="submit" className="btn btn-primary" value="ok"></input>
                            </div>
                        </form>
                    </div>
                    <div> <Link to="/addUser">M'inscrire</Link></div>
                </div>
            </div>
        )
    }
}

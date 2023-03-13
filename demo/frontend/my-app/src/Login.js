import React from 'react'
import {Link} from "react-router-dom";
import logo from './static/logo-tribean.png'
import './login.scss';

export default class Login extends React.Component {
constructor() {
    super();
    this.state = { userData: {} }
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    }

    handleChange (event) {
        //TODO
        //le ... permet de dupliquer l'objet
        let currentState = {...this.state.userData};
        currentState[event.target.name] = event.target.value;
        this.setState(currentState);
    }

    onSubmit (event) {
        event.preventDefault();
        console.log ("onSubmit");
        console.log (this.state.userData);
        //TODO
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

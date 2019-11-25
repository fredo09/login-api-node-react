import React from 'react';
import BoxLogin from './../BoxLogin';
import { Link } from 'react-router-dom';

class Login extends React.Component {
    state ={
        email: "",
        password: "",
        loginIn: false
    }

    handleChangeEmail = (e) =>{
        console.log('Email ', e.target.value);
        this.setState({email: e.target.value})
    }

    handleChangePassword = (e) =>{
        console.log('Password ', e.target.value);
        this.setState({ password: e.target.value });
    }

    _handleSubmit = (e) => {
        e.preventDefault();
        this.setState({ loginIn: true })
        console.log(this.state);
        this._login();
    }

    // parseJwt (token)  {
    //     console.log(token);
    //     let base64Url = token.split('.')[1];
    //     let base64 = base64Url.replace('-', '+').replace('_', '/');
    //     return JSON.parse(window.atob(base64));
    // };

    _login() {
        const { email, password } = this.state;
        let data ={email, password}
        console.log('ok mi data: ',typeof(data));
        fetch('http://localhost:3080/Login',{
            method: 'POST',
            body: JSON.stringify(data),
            headers:{
                'Accept' : 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            localStorage.setItem("token",data.token);
            console.log(localStorage.getItem("token"));
        })
    }

    render(){
        return(
            <BoxLogin>
                <article className="panel">
                    <p className="panel-heading">
                        <span>Login</span>
                    </p>
                    <div className="panel-block">
                        <div className="control has-icons-left">
                            <form onSubmit={this._handleSubmit}>
                            <div className="field">
                                <div className="control has-icons-left has-icons-right">
                                    <input 
                                        className="input"
                                        type="email" 
                                        placeholder="yourmail@example.com"
                                        onChange={this.handleChangeEmail}
                                        />
                                </div>
                                <br style={{ margin: '2px' }}/>
                                <div className="field">
                                    <div className="control has-icons-left">
                                        <input 
                                            className="input" 
                                            type="password" 
                                            placeholder="Password"
                                            onChange={this.handleChangePassword}
                                            />
                                    </div>
                                </div>
                                <hr/>
                                <div className="field">
                                    <p className="control">
                                        <button className="button is-info is-large is-fullwidth is-rounded">
                                        Login
                                        </button>
                                    </p>
                                </div>
                                <div>
                                    <Link to="/Registro" className="is-info"> Registrate aqui!</Link>
                                </div>    
                            </div>
                            </form>
                        </div>
                    </div>
                </article>        
            </BoxLogin>
        );
    }
}

export default Login;
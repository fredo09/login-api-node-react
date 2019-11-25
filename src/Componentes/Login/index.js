import React, { useState } from 'react';
import BoxLogin from './../BoxLogin';
import { Link } from 'react-router-dom';

const Login = () => {

    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ loginIn, setLoginIn ] = useState(false);

    const handleChangeEmail = (e) =>{
        console.log('Email ', e.target.value);
        setEmail(e.target.value);
    }

    const handleChangePassword = (e) =>{
        console.log('Password ', e.target.value);
        setPassword(e.target.value);
    }

    const _handleSubmit = (e) => {
        e.preventDefault();
        _login();
    }

    const _login = () => {
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
            setLoginIn(true);
            console.log(data);
            console.log(loginIn);
            localStorage.setItem("token",data.token);
            console.log(localStorage.getItem("token"));
        })
    }    

    return(
            <BoxLogin>
                <article className="panel">
                    <p className="panel-heading">
                        <span>Login</span>
                    </p>
                    <div className="panel-block">
                        <div className="control has-icons-left">
                            <form onSubmit={_handleSubmit}>
                            <div className="field">
                                <div className="control has-icons-left has-icons-right">
                                    <input 
                                        className="input"
                                        type="email" 
                                        placeholder="yourmail@example.com"
                                        onChange={handleChangeEmail}
                                        />
                                </div>
                                <br style={{ margin: '2px' }}/>
                                <div className="field">
                                    <div className="control has-icons-left">
                                        <input 
                                            className="input" 
                                            type="password" 
                                            placeholder="Password"
                                            onChange={handleChangePassword}
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

export default Login;
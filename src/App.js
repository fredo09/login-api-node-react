import React from 'react';
import Login from './Componentes/Login';
import { Home } from './Pages/Home';
import { RegistroUsuario } from './Pages/RegistroUsuario';
import { Route, Switch } from 'react-router-dom';

import 'bulma/css/bulma.css';
import './App.css';

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <Switch>
          <Route path='/Login' exact component={Login}/>
          <Route path="/Home"  exact component={Home}/>
          <Route path="/Registro"  exact component={RegistroUsuario}/>
        </Switch>
        <Login />
      </div>
    );
  }
}

export default App;

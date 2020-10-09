import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './css/App.css';
import Home from './components/Usuario/Home';
import exportCriarUsuario from './components/Usuario/index';
import CadastrarFuncionario from './components/Funcionario/CadastrarFuncionario';
import Funcionarios from './components/Funcionario/Funcionarios';
import Login from './components/Usuario/Login';
import EditarFuncionario from './components/Funcionario/EditarFuncionario';
import NotFound from './components/404/NotFound';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Router>
        <Switch>
           <Route exact path="/" component={Home} />
           <Route exact path="/registrousuario" component={exportCriarUsuario} />
           <Route exact path="/registrofuncionario" component={CadastrarFuncionario} />
           <Route exact path="/login" component={Login} />           
           <Route exact path="/funcionarios" component={Funcionarios} /> 
           <Route exact path="/editar/:id" component={({ match }) => <EditarFuncionario id={match.params.id} />} />
          <Route component={NotFound} />
        </Switch>
      </Router>
      </header>
    </div>
  );
}

export default App;

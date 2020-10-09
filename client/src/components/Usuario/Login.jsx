import React from "react";
import { Redirect } from "react-router-dom";
import { LoginUser } from "../../actions/userActions";
import Container from "react-bootstrap/Container";
import swal from "sweetalert2";
import Image from "react-bootstrap/Image";
import './css/login.css';

export default function LoginForm() {
  const initialState = {
    email: "",
    password: "",
    redirectTo: null
  };

  const [usuario, setUsuario] = React.useState(initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (usuario.email){
      if (usuario.password){
        LoginUser(usuario, setUsuario)
      }else{
        swal.fire('Error', 'Por favor, digite sua senha', 'error')
      }
    }else{
      swal.fire('Error', 'Por favor, digite o seu e-mail', 'error')
    }
  };

  const updateField = (e) => {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  };

  const cancelar = function (e) {
    window.location.replace("http://localhost:3000");
  };
  if (usuario.redirectTo) {
    return <Redirect to={{ pathname: usuario.redirectTo }} />
  } 
  else {
    return (
      <Container id="login">
        <Image
          id="login"
          src="http://3lminformatica.com.br/site/wp-content/themes/3lm-theme/assets/images/3lmlogo.png"
        ></Image>
        <form id="formlogin">
          <div  id="contelogin2">            
              <input
                type="text"
                required
                name="email"
                value={usuario.email}
                onChange={updateField}
                className="form-control"
                placeholder="E-mail"
              />
            </div>
          
          <div id="contelogin2">            
              <input
                type="password"
                required
                name="password"
                value={usuario.password}
                onChange={updateField}
                className="form-control"
                placeholder="Senha"
              />                   
          </div>  
          <div className="botoes1">
            <input type="submit" className="btn btn-outline-dark" onClick={handleSubmit} value='Iniciar Sessão'/>
            <button className="buttonback" type="button" onClick={cancelar}>
              Cancelar
            </button>
          </div>
        </form>
        
      </Container>
    );
  }
}

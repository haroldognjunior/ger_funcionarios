import React from "react";
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import './css/home.css';


export default function Home() {

  const loguear = function (e) {
    window.location.replace("http://localhost:3000/login");
  };
  const registrar = function (e) {
    window.location.replace("http://localhost:3000/registrousuario");
  };

  return (
    <Container id="contehome1">
      <Image id="header" src="http://3lminformatica.com.br/site/wp-content/themes/3lm-theme/assets/images/3lmlogo.png" ></Image>
      <div className="contehome2">
      <button className="btn btn-outline-dark"  onClick={loguear}  type="button" >
          Iniciar Sessão
        </button>
      </div>   
        <div className="regconthome">
        <button className="btn btn-outline-light"  onClick={registrar} variant="primary" type="button" >
            Registre-se
        </button> 
        </div>      
    </Container>
  );
}
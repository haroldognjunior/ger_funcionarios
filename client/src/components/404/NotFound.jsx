import React from "react";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";

const NotFound = () => {
  return (
    <Container id="naoexiste">
      <div className="containernaoexiste">
        <Image
          id="header"
          src="http://3lminformatica.com.br/site/wp-content/themes/3lm-theme/assets/images/3lmlogo.png"
        ></Image> 
        <h1>
          Ops, você chegou a um lugar desconhecido por nós =( <br />{" "}
          Volte à <a href="http://localhost:3000">página inicial</a>, por favor.
        </h1>
        <br />
      </div>
    </Container>
  );
};
export default NotFound;
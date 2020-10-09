import React, {useEffect} from 'react';
import { getProfile, logout} from '../../actions/userActions';
import { deleteEmployee, getEmployees} from '../../actions/employeeActions'
import { connect, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import Container from "react-bootstrap/Container";
import BotonLogout from "../Usuario/BotonLogout";
import Button from "react-bootstrap/Button";
import './css/funcionarios.css';
 

function Funcionarios({Employees, getEmployees, getProfile}) {
    useEffect(()=>{
      getEmployees()
  },[getEmployees])

  useEffect(()=>{
    getProfile()
},[getProfile])
  
const logout_user = () => {
    logout();
  };
  const dispatch = useDispatch();
  const deleteHandler = (firstName, id) => {
    dispatch(deleteEmployee(firstName, id));
  }; 

  return(
      
      <Container id="contehome1">
      <Image
        id="header"
        src="http://3lminformatica.com.br/site/wp-content/themes/3lm-theme/assets/images/3lmlogo.png"
      ></Image>
     
     <div className="logout">
     
     <BotonLogout
        id="blogout"
        title="Log Out"
        onClick={(e) => {
          logout_user();
                      }}
      />
      <span id="spanlogout">Logout</span>
      </div>
      <div className="botaocadastrar">
     <Link to={'/registrofuncionario/'}>
                  <input
                  type="submit"
                  className="btn btn-outline-dark"
                  value="Cadastrar Funcionário"
                  />
                </Link>
     </div>
      {Employees.map(C => {
          return <div id="Funcionarios" key={C.idEmployee}>
           <h1>Dados do Funcionário {C.firstName} {C.lastName}</h1> 
           <span className="funcionarios">Nome: {C.firstName} 
           <br />Sobrenome: {C.lastName}
           <br />Cargo: {C.position}
           <br />Data de Nascimento: {C.birthDate}
           <br />Salário: R${C.salary}
           <br />Descrição do Cargo: {C.description}
           <br />Funcionário cadastrado no sistema pelo usuário de ID {C.userIdUser}
           </span>
           <br />
           <div className="botoesfinal">
           <Link to={'/editar/'+ C.idEmployee}>
           <input
                  id="editar"
                  type="submit"
                  className="btn btn-outline-dark"
                  value="Editar Funcionário "
                  />         
            </Link> 
            <Button
              id="elimbtn"
              className="btn btn-dark"
              variant="top"
              size="lg"              
              onClick={() =>
                deleteHandler(C.firstName, C.idEmployee)
              }
            >
              Deletar Funcionário
            </Button> 
            </div>          
      </div>})}
      </Container>
  );
}

function mapStateToProps(state){
    return{
      Employees : state.usuario.funcionarios
    }
  }

export default connect (mapStateToProps,{getProfile, getEmployees})( Funcionarios )
  
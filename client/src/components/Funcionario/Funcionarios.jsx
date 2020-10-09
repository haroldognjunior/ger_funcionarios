import React, {useEffect} from 'react';
import { getProfile, logout} from '../../actions/userActions';
import { deleteEmployee, getEmployees} from '../../actions/employeeActions'
import { connect, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import Container from "react-bootstrap/Container";
import BotonLogout from "../Usuario/BotonLogout";
import Button from "react-bootstrap/Button";
/* import './css/funcionarios.css';
 */

function Funcionarios({Employees, getEmployees, getProfile}) {
    useEffect(()=>{
      getEmployees()
  },[getEmployees])

  useEffect(()=>{
    getProfile()
},[getEmployees])
  
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
        src="https://fotos.subefotos.com/97d96c5903bb437b451cff5d3f864f20o.png"
      ></Image>
     <div>
     
     <BotonLogout
                      id="blogout"
                      title="Log Out"
                      onClick={(e) => {
                        logout_user();
                      }}
                    />
     <Link to={'/registrocliente/'}>
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
           <span>Nome: {C.firstName} 
           <br />Sobrenome: {C.lastName}
           <br />Cargo: {C.position}
           <br />Data de Nascimento: {C.birthDate}
           <br />Salário: R${C.salary}
           <br />Descrição do Cargo: {C.description}
           <br />Funcionário cadastrado no sistema pelo usuário de ID {C.userIdUser}
           </span>
           <br />
           <Link to={'/editar/'+ C.idEmployee}>
           <input
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
              Eliminar Funcionário
            </Button>
           
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
  
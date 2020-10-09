import React, {useEffect, useState} from "react";
import { addEmployee } from "../../actions/employeeActions";
import { getProfile} from '../../actions/userActions';
import Container from "react-bootstrap/esm/Container";
import Image from "react-bootstrap/Image";
import { connect } from 'react-redux';


function CadastrarFuncionario ({ id, addEmployee, usuarioConectado, getProfile}) {
    useEffect(()=>{
        
        getProfile(id)     
     },[])
    
        
     
  const [input, setInput] = useState({
    firstName : null,
    lastName : null,
    position : null,
    birthDate : null,
    salary: null,
    description: null
})

const handleInputChange = function(e){
    e.preventDefault()        
    setInput({
        ...input,
        [e.target.name]: e.target.value            
    })
   
}
  
  const handleSubmit = function(e){
    e.preventDefault();     
    addEmployee(input, usuarioConectado.idUser) ;     
}

  const cancelar = function (e) {
    window.location.replace("http://localhost:3000");
  };



  return (
    <Container id="cadastrarfuncionario">
      <Image
        id="header"
        src="https://fotos.subefotos.com/97d96c5903bb437b451cff5d3f864f20o.png"
      ></Image>
      <div id="criarfuncionario">
       
          <div className="Form">
            <div className="form-group col-md-12">
              <h4>Cadastrar Funcionário</h4>
              <div className="Form-Group">
              <input
                  className="Form-Field"
                  name="firstName"
                  placeholder="Nome do Funcionário"
                  type="text"
                  onChange={handleInputChange}
                  required
                />
                </div>
                <div>
                <input
                  className="Form-Field"
                  name="lastName"
                  placeholder="Sobrenome do Funcionário"
                  type="text"
                  onChange={handleInputChange}
                  required
                />
                
              </div>
              <div className="Form-Group">
                <input
                  className="Form-Field"
                  name="position"
                  placeholder="Cargo do Funcionário"
                  type="text"
                  onChange={handleInputChange}
                  required
                />                
              </div>
              <div className="Form-Group">
                <input
                  className="Form-Field"
                  name="birthDate"
                  placeholder="Telefone do Contato"
                  type="date"
                  onChange={handleInputChange}
                  required
                />
                
              </div>
              <div className="Form-Group">
                <input
                  className="Form-Field"
                  name="salary"
                  placeholder="Salário do Funcionário"
                  type="number"
                  onChange={handleInputChange}
                  required
                />                
              </div>
              <div className="Form-Group">
                <input
                  className="Form-Field"
                  name="description"
                  placeholder="Descrição do Cargo do Funcionário"
                  type="text"
                  onChange={handleInputChange}
                  required
                />                
              </div>
              <div className="botoes1">
                <input
                  type="submit"
                  className="btn btn-outline-dark"
                  value="Cadastrar Funcionário"
                  onClick={handleSubmit}
                />
                <button
                  type="button"
                  className="btn btn-outline-light"
                  value="Cancelar"
                  onClick={cancelar}
                >
                  Cancelar
                </button>
              </div>
            </div>

         
          </div>
        
      </div>      
    </Container>
  );
};


function mapStateToProps(state){
    return{
        usuarioConectado : state.usuario.usuarioConectado,
        
    }
  }
  
  export default connect (mapStateToProps,{addEmployee, getProfile})( CadastrarFuncionario )
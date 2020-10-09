import React, { useState, useEffect } from "react";
import { getProfile } from "../../actions/userActions";
import { getUpdateEmployee, getEmployee } from "../../actions/employeeActions";

import { connect } from "react-redux";
/* import "./CSS/client.css"; */
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Funcionarios from "./Funcionarios";

function EditarFuncionario({ id, getUpdateEmployee, getEmployee, funcionarioSelecionado }) {

    
   
    
        /* const [input, setInput] = useState({
            firstName : '',
            lastName : '',
            position : '',
            birthDate : '',
            salary: '',
            description: ''
        }) */
      /*   const handleInputChange = function(e){
            e.preventDefault()        
            setInput({
                ...input,
                [e.target.name]: e.target.value            
            })
           
        } */
        const [input, setInput] = useState({});
        const handleInputChange = (event) => {
            const { name, value } = event.target;
            setInput({
              ...input,
              [name]: value,
            });
          };
          
         /*  const handleSubmit = function(e){
            e.preventDefault();     
            console.log(input, "es input")
            console.log(id, "es id")
            getUpdateEmployee(id, input) ;     
        } */
        
          const cancelar = function (e) {
            window.location.replace("http://localhost:3000");
          };
        
        useEffect(()=>{
            getEmployee(id)           
        },[id,getEmployee])
    
       return (
        <Container id="cadastrarfuncionario">
      <Image
        id="header"
        src="https://fotos.subefotos.com/97d96c5903bb437b451cff5d3f864f20o.png"
      ></Image>
      <form id="criarfuncionario" 
      onSubmit={(e) => {
          e.preventDefault();
          getUpdateEmployee(id, input);
      }}
      >
       
          <div class="container-control">
            
              <h4>Editar Dados do Funcionário {funcionarioSelecionado.firstName}</h4>
              
              <input
                  class="form-control"
                  name="firstName"
                  placeholder="Nome do Funcionário"
                  value={funcionarioSelecionado.firstName}
                  
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
                {/* <input
                  type="submit"
                  className="btn btn-outline-dark"
                  value="Cadastrar Funcionário"
                  onClick={handleSubmit}
                /> */}
                <input type="submit" id="buttonalta" value="Modificar datos" />
                <button
                  type="button"
                  className="btn btn-outline-light"
                  value="Cancelar"
                  onClick={cancelar}
                >
                  Cancelar
                </button>
              </div>
            
        
      </form>      
    </Container>
       )
    }
    
    function mapStateToProps(state){
        return {
            
            funcionarioSelecionado : state.usuario.funcionarioSelecionado
        }
    }
    
    export default connect(mapStateToProps,{getEmployee, getUpdateEmployee})(EditarFuncionario)
    
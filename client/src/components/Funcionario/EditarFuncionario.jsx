import React, { useState, useEffect } from "react";
import { getUpdateEmployee, getEmployee } from "../../actions/employeeActions";
import { connect } from "react-redux";
import "./css/editar.css";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";


function EditarFuncionario({ id, getUpdateEmployee, getEmployee, funcionarioSelecionado }) {
  const [input, setInput] = useState({});
  const handleInputChange = (event) => {
      const { name, value } = event.target;
      setInput({
        ...input,
        [name]: value,
      });
    };          
        
    const cancelar = function (e) {
      window.location.replace("http://localhost:3000/funcionarios");
    };
    
    useEffect(()=>{
        getEmployee(id)           
    },[getEmployee, id])

    useEffect(() => {
      setInput(funcionarioSelecionado);
    }, [funcionarioSelecionado])

    return (
    <Container id="cadastrarfuncionario">
  <Image
    id="header"
    src="http://3lminformatica.com.br/site/wp-content/themes/3lm-theme/assets/images/3lmlogo.png"
  ></Image>
  <form id="criarfuncionario" 
  onSubmit={(e) => {
      e.preventDefault();
      getUpdateEmployee(id, input);
  }}
  >       
      <div className="container-control">            
          <h4>Editar Dados do Funcionário {input.firstName}</h4>              
          <input
              className="Form-Group"
              name="firstName"
              placeholder="Nome do Funcionário"
              type="text"
              value={input.firstName}                  
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
              value={input.lastName} 
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
              value={input.position} 
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
              value={input.birthDate} 
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
              value={input.salary} 
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
              value={input.description} 
              onChange={handleInputChange}
              required
            />                
          </div>
          <div className="botoes1">            
            <input type="submit" id="buttonalta"className="btn btn-outline-dark" value="Modificar datos" />
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
    
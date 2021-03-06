import * as yup from "yup";
import PropTypes from "prop-types";
import React from "react";
import { ErrorMessage, Formik, Form as FormikForm, Field } from "formik";
import { useDispatch } from "react-redux";
import { addUser } from "../../actions/userActions";
import Container from "react-bootstrap/esm/Container";
import Image from "react-bootstrap/Image";
import './css/criarusuario.css';

const validations = yup.object().shape({
  firstName: yup
    .string()
    .required("Digita o seu nome!"),
  email: yup
    .string()
    .required("Digita o seu e-mail!")
    .email("Deve digitar um e-mail válido!"),
  password: yup
    .string()
    .min(6, "Sua senha deve contar ao menos 6 caracteres!")
    .required("Deve digitar uma senha!"),
});

const Form = ({ initialValues }) => {
  const dispatch = useDispatch();
  function handleSubmit(values) {
    dispatch(addUser(values));
    
  }
  const cancelar = function (e) {
    window.location.replace("http://localhost:3000");
  };
  return (
    <Container id="criarusuario">
      <Image
        id="header"
        src="http://3lminformatica.com.br/site/wp-content/themes/3lm-theme/assets/images/3lmlogo.png"
      ></Image>
      <div id="usuario">
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={validations}
        >
          <FormikForm className="Form">
           
              <h4>Criar Usuário</h4>
              <div className="Form-Group">
                <Field
                  className="Form-Field"
                  name="firstName"
                  placeholder="Nome"
                  type="text"
                />
                <ErrorMessage
                  name="firstName"
                  className="Form-Error"
                  component="span"
                />
              </div>
              <div className="Form-Group">
                <Field
                  className="Form-Field"
                  name="email"
                  placeholder="E-mail"
                  type="email"
                />
                <ErrorMessage
                  name="email"
                  className="Form-Error"
                  component="span"
                />
              </div>
              <div className="Form-Group">
                <Field
                  className="Form-Field"
                  name="password"
                  placeholder="Senha"
                  type="password"
                />
                <ErrorMessage
                  className="Form-Error"
                  component="span"
                  name="password"
                />
              </div>
              <div className="botoes1">
                <input
                  type="submit"
                  className="btn btn-outline-dark"
                  value="Criar Usuário"
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
            

         
          </FormikForm>
        </Formik>
      </div>      
    </Container>
  );
};

Form.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  initialValues: PropTypes.object.isRequired,
};

export default Form;
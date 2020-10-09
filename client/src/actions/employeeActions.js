import {
    GET_EMPLOYEES,
    GET_EMPLOYEE,
    ADD_EMPLOYEE,
    MODIFY_EMPLOYEE
  
} from "../constants/employeesConstants";
import axios from "axios";
import swal from "sweetalert2";
import Swal from 'sweetalert2';

export function addEmployee(input,idUser) {
  return function (dispatch) {
    axios
      .post(`http://localhost:3001/employees/${idUser}`, input)
      .then((res) => {
        if (res.status === 200) {
          swal
            .fire({
              title: "Excelente!",
              text:
                "O cliente foi incluído com sucesso =)",
              icon: "success",
            })
            .then((value) => {
              dispatch({ type: ADD_EMPLOYEE }) &&
                window.location.replace("http://localhost:3000/funcionarios");
            });
        }
      })
      .catch(() => {
        swal.fire({
          title: "Ops",
          text: "Cliente já registrado",
          icon: "error",
        });
      });
  };
}

export function getEmployees() {
  return (dispatch) => {
    axios
      .get("http://localhost:3001/employees/")
      .then((res) => {
        if (res.status === 200) {
          return dispatch({ type: GET_EMPLOYEES, payload: res.data });
        }
      });
  };
}

export function getEmployee(idEmployee) {
  return (dispatch) => {
    axios
      .get(`http://localhost:3001/employees/${idEmployee}`)
      .then((res) => {
        if (res.status === 200) {
          return dispatch({ type: GET_EMPLOYEE, payload: res.data });
        }
      });
  };
}


export function deleteEmployee(firstName, id) {
  return function (dispatch) {
    Swal.fire({
      title: 'Tem certeza?',
      text: `Você está a ponto de eliminar ${firstName}`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sim',
      cancelButtonText: 'Não'
    }).then((result) => {
      if (result.value) {
        axios.delete(`http://localhost:3001/employees/${id}`)
          .then(res => {
            Swal.fire(
              'Eliminado!',
              'O funcionário foi eliminado corretamente',
              'success'
            )
            axios.get(`http://localhost:3001/employees/`)
              .then((response) => {
                return dispatch({
                  type: GET_EMPLOYEES &&
                  window.location.replace("http://localhost:3000/funcionarios")
                })
              })
              .catch(res => {
                return dispatch({
                  type: GET_EMPLOYEES,
                  payload: []
                })
              })
          })
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          Swal.fire(
            'Cancelado',
            'O funcionário não foi eliminado',
            'error'
          )
        }
      })
    }
  }

  export function getUpdateEmployee(id, input) {
    return function (dispatch) {
      
        
            axios
              .put(`http://localhost:3001/employees/editar/${id}`, input)
              .then((res) => {
                if (res.status === 200) {
                  dispatch({ type: MODIFY_EMPLOYEE, payload: res.data });
                  swal
                    .fire({
                      title: "Excelente!",
                      text: "Os dados foram modificados corretamente!",
                      icon: "success",
                    })
                    .then((value) => {
                      window.location.replace("http://localhost:3000/funcionarios");
                    });
                }
              })
          
        .catch((error) => {
          swal.fire({
            title: "¡Qué mal!",
            text: "La dirección ingresada no es válida",
            icon: "error",
          });
        });
    };
  }
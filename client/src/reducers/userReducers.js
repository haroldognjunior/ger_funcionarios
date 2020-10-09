import {
  ADD_USER,
  GET_USER_LOGGED,
  GET_PROFILE,
  LOGGIN,
  LOGOUT,
  GET_VALID_USER
} from "../constants/userConstants";


import {
  GET_EMPLOYEES,
  GET_EMPLOYEE,
  ADD_EMPLOYEE,
  MODIFY_EMPLOYEE,
  EMPLOYEE_SELECTED
} from "../constants/employeesConstants";

const initialState = {
  usuarios: [],
  usuarioConectado: {},
  funcionarios: [],
  funcionarioSelecionado: "" 
};

export default function usuario(state = initialState, action) {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        usuarios: state.usuarios,
      };
    case GET_VALID_USER:
      return {
        ...state,
        usuarios: action.payload,
      };

    case GET_PROFILE:
      return {
        ...state,
        usuarioConectado: action.payload,
      };

    case GET_USER_LOGGED:
    return {
        ...state,
        usuarioConectado: action.payload,
      };

    case LOGGIN:
    return {
        ...state,
        usuarioConectado: action.payload
            }

    case LOGOUT:
      return {
        ...state,
        usuarios: [],
        usuarioConectado: {},
      };

       
    case GET_EMPLOYEES:
      return {
        ...state,
        funcionarios: action.payload,
      };

    case GET_EMPLOYEE:
      return {
        ...state,
        funcionarioSelecionado: action.payload
      }
   
      case ADD_EMPLOYEE:
        return {
          ...state,
          usuarios: state.usuarios,
        };  

    case MODIFY_EMPLOYEE:
      return {
        ...state,
        funcionarios: action.payload,
      };
    
      case EMPLOYEE_SELECTED:
        return {
          ...state,
          funcionarioSelecionado: action.payload,
        };
  

      
      
   

    default:
      return state;
  }
}

import { act } from "react-dom/test-utils";
import * as actionTypes from "../actions/actionTypes";

const initState = {
  user: {name:"Guest",email:"",contactNo:"",profession:"---"},
  error: null,
  inProgress: false,
  isLoggedIn :false,
  token:null,
  userCreatedSuccess: false,
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.CREATE_USER_START:
      return {
        ...state,
        inProgress: true,
      };
    case actionTypes.CREATE_USER_FAILED:
      return {
        ...state,
        inProgress: false,
        error: action.error,
        userCreatedSuccess: false,
      };
    case actionTypes.CREATE_USER_SUCCESS:
      return {
        ...state,
        inProgress: false,
        userCreatedSuccess: true,
      };
    case actionTypes.LOGIN_START:
      return{
        ...state,
        inProgress:true,
      };
    case actionTypes.LOGIN_FAILED:
      return{
        ...state,
        inProgress:false,
        error:action.error,
      } 
    case actionTypes.LOGIN_SUCCESS:{
      localStorage.setItem("isLoggedIn",true);
      localStorage.setItem("token",action.token);
      return{
        ...state,
        inProgress:false,
        user:action.user,
        isLoggedIn:true,
      }
    }
    case actionTypes.IS_AUTHORIZED:{
      return {
        ...state,
        isLoggedIn :localStorage.getItem("isLoggedIn")=='false'?false:true,
        token:localStorage.getItem("token"),
      }
    }
    case actionTypes.LOGOUT:{
      localStorage.removeItem('token');
      localStorage.setItem('isLoggedIn',false);
      return {
        ...state,
        isLoggedIn:false,
        token:null,
      }
    }

    default:
      return state;
  }
};

export default reducer;

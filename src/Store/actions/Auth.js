import * as actions from "./actionTypes";
import * as API_URLS from "../../Utils/API_urls.js";

const createUserStart = () => {
  return {
    type: actions.CREATE_USER_START,
  };
};
const createUserSuccess = (user) => {
  return {
    type: actions.CREATE_USER_SUCCESS,
    user: user,
  };
};
const createUserFailed = (error) => {
  return {
    type: actions.CREATE_USER_FAILED,
    error: error,
  };
};
export const createUser = (user) => {
  return (dispatch) => {
    dispatch(createUserStart);
    fetch(API_URLS.createUser, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        console.log("user created success", result);
        return dispatch(createUserSuccess(result.user));
      })
      .catch((error) => {
        console.log(error);
        return dispatch(createUserFailed(error));
      });
  };
};
const loginStart = () =>{
  return {
    type:actions.LOGIN_START
  }
}
const loginFailed = (error)=>{
  return {
    type:actions.LOGIN_FAILED,
    error:error,
  }
}
const loginSuccess =(user,token)=>{
  return {
    type:actions.LOGIN_SUCCESS,
    user:user,
    token:token,
  }
}
export const login = (email,password) =>{
  
  return (dispatch)=> {
    dispatch(loginStart());
    fetch(API_URLS.login,{
      method:"Post",
      headers:{
        'Content-Type':"Application/json",
      },
      body:JSON.stringify({email:email,password:password}),
    }).then((response)=>{
      return response.json();
    }).then((result)=>{
      console.log("login success");
      dispatch(loginSuccess(result.user,result.token));
    }).catch((error)=>{
      console.log(error)
      dispatch(loginFailed(error));
    })
  }
}

export const isAuthorized = ()=>{
  console.log("is auth running");
  return {
    type:actions.IS_AUTHORIZED,
  }
}

export const logout = () =>{
  return {
    type:actions.LOGOUT,
  }
}
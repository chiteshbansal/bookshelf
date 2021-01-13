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

import { act } from "react-dom/test-utils";
import * as actionTypes from "../actions/actionTypes";

const initState = {
  user: null,
  error: null,
  inProgress: false,
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
    default:
      return state;
  }
};

export default reducer;

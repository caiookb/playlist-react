import { AuthTypes } from "../../types";

const initialState = {
  isAuthenticated: false,
  signInError: false,
  errorMessage: null,
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case AuthTypes.LOGIN_SERVER_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        signInError: false,
        errorMessage: null,
      };
    case AuthTypes.LOGIN_SERVER_FAILED:
      const { errorMessage } = payload;
      return {
        ...state,
        isAuthenticated: false,
        signInError: true,
        errorMessage,
      };
    case AuthTypes.LOGOUT_SERVER_SUCCESS:
      return {
        ...state,
        isAuthenticated: false,
        signInError: false,
        errorMessage: null,
      };
    default:
      return state;
  }
};

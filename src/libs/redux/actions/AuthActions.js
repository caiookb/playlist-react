import { AuthTypes } from "../types";

export const setLoginSuccess = () => ({
  type: AuthTypes.LOGIN_SERVER_SUCCESS,
  payload: null,
});

export const setLoginFailed = (errorMessage) => ({
  type: AuthTypes.LOGIN_SERVER_FAILED,
  payload: { errorMessage },
});

export const setLogoutSuccess = () => ({
  type: AuthTypes.LOGOUT_SERVER_SUCCESS,
  payload: null,
});

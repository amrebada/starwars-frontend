import { getCookie, setCookie } from "./utils";

export const initialAuthState = {
  accessToken: getCookie("accessToken"),
  refreshToken: getCookie("refreshToken")
};

const setTokens = (accessToken, refreshToken) => {
  setCookie("accessToken", accessToken, 1);
  setCookie("refreshToken", refreshToken, 30);
};

export const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      setTokens(action.accessToken, action.refreshToken);
      return {
        accessToken: action.accessToken,
        refreshToken: action.refreshToken
      };
    case "LOGOUT":
      setTokens(null, null);
      return {
        accessToken: null,
        refreshToken: null
      };
    case "UPDATE":
      setCookie("accessToken", action.accessToken, 1);
      return {
        accessToken: action.accessToken,
        refreshToken: state.refreshToken
      };
    default:
      return state;
  }
};

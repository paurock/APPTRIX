import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  USER_LOADED,
  AUTH_ERROR
} from "../actions/types";
import {refreshToken, accessToken} from "../../api/tokens";
const initialState = {
  token: accessToken,
  refreshToken: refreshToken,
  isAuthenticated: null,
  isLoading: false,
  user: null
};

export default function LoginReducer(state = initialState, action) {
  switch (action.type) {
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true
      };
    case LOGIN_SUCCESS:
      localStorage.setItem("access_token", action.payload.data.access);
      localStorage.setItem("refresh_token", action.payload.data.refresh);
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        isLoading: false
      };
    case LOGIN_FAIL:
    case AUTH_ERROR:
      localStorage.removeItem("access_token");
      localStorage.removeItem("refresh_token");
      return {
        ...state,
        token: null,
        refreshToken: null,
        user: null,
        isAuthenticated: false,
        isLoading: false
      };
    default:
      return state;
  }
}

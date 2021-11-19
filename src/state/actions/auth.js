import axios from "axios";
import { refreshToken, accessToken } from "../../api/tokens";
import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  GET_ERRORS,
  USER_LOADED,
  AUTH_ERROR,
} from "./types";

//Axios config
const baseURL = "http://erp.apptrix.ru/api/";

const createHeaders = () =>
  (axiosInstance.defaults.headers["Authorization"] =
    "Bearer " + localStorage.getItem("access_token"));

export const axiosInstance = axios.create({
  baseURL: baseURL,
  timeout: 3000,
});

//fn for login authorisation
export const connectAndSaveToken = (
  formData,
  setUsernameError,
  setPasswordError,
  setMessageError,
  dispatch
) => {
  axiosInstance
    .post(`token/`, {
      username: formData.username,
      password: formData.password,
    })
    .then((res) => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res,
      });
      createHeaders();
    })
    .catch((err) => {
      //handle errors and set them to redux store
      try {
        const { detail, username, password } = err.response.data;
        dispatch({
          type: GET_ERRORS,
          payload: {
            message: detail,
            username: username,
            password: password,
          },
        });
        //Set errors for the form (devmode)
        setMessageError(err.response.data.detail);
        setUsernameError(err.response.data.username);
        setPasswordError(err.response.data.password);
      } catch (err) {
        console.log(err);
        setMessageError("Sorry something went wrong");
      }
    });
};

// CHECK TOKEN & LOAD USER
export const loadUser = (dispatch, navigate) => {
  // User Loading
  if (accessToken) {
    dispatch({
      type: USER_LOADED,
    });
    createHeaders();
  } else if (refreshToken) {
    axiosInstance
      .post("/token/refresh/", { refresh: refreshToken })
      .then((response) => {
        dispatch({
          type: USER_LOADED,
        });
      });
  } else {
    dispatch({
      type: AUTH_ERROR,
    });
    dispatch({
      type: LOGIN_FAIL,
    });
  }
};

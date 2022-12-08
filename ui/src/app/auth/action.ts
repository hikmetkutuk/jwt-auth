import { Dispatch } from "redux";

import { AuthActionTypes } from "./types";
import { MessageActionTypes } from "../message/types";

import AuthService from "../../services/auth";

export const register =
  (username: string, mail: string, password: string) =>
  (dispatch: Dispatch) => {
    return AuthService.register(username, mail, password).then(
      (response) => {
        dispatch({
          type: AuthActionTypes.REGISTER_SUCCESS,
        });

        dispatch({
          type: MessageActionTypes.SET_MESSAGE,
          payload: response.data.message,
        });

        return Promise.resolve();
      },
      (error) => {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        dispatch({
          type: AuthActionTypes.REGISTER_FAIL,
        });

        dispatch({
          type: MessageActionTypes.SET_MESSAGE,
          payload: message,
        });

        return Promise.reject();
      }
    );
  };

export const login =
  (username: string, password: string) => (dispatch: Dispatch) => {
    return AuthService.login(username, password).then(
      (data) => {
        dispatch({
          type: AuthActionTypes.LOGIN_SUCCESS,
          payload: { user: data },
        });

        return Promise.resolve();
      },
      (error) => {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        dispatch({
          type: AuthActionTypes.LOGIN_FAIL,
        });

        dispatch({
          type: MessageActionTypes.SET_MESSAGE,
          payload: message,
        });

        return Promise.reject();
      }
    );
  };

export const logout = () => (dispatch: Dispatch) => {
  AuthService.logout();

  dispatch({
    type: AuthActionTypes.LOGOUT,
  });
};

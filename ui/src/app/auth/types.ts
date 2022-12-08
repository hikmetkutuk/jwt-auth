export enum AuthActionTypes {
  REGISTER_SUCCESS = "@@auth/REGISTER_SUCCESS",
  REGISTER_FAIL = "@@auth/REGISTER_FAIL",
  LOGIN_SUCCESS = "@@auth/LOGIN_SUCCESS",
  LOGIN_FAIL = "@@auth/LOGIN_FAIL",
  LOGOUT = "@@auth/LOGOUT",
}

export interface Auth {
  username: string;
  mail: string;
  password: string;
}

export interface authState {
  readonly users: Auth[];
}

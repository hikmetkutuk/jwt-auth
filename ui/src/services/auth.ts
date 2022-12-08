import axios from "axios";

const API_URL = "http://localhost:8080/api/";

const register = (username: string, mail: string, password: string) => {
  return axios.post(API_URL + "user/create", {
    username,
    mail,
    password,
  });
};

const login = (username: string, password: string) => {
  return axios
    .post(API_URL + "login", {
      username,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

export default {
  register,
  login,
  logout,
};

import axios from "axios";


//export default function AuthService() {
const API_URL = "http://localhost:8080/api/auth/";

const register = (username, email, password) => {
  return axios.post(API_URL + "signup", {
    username,
    email,
    password,
  });
};

const login = (username, password) => {
  return axios
    .post(API_URL + "signin", {
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

const login2 = (username, password) => {
  return axios
    .post(API_URL + "signin", {
      username,
      password,
    });
    
};

const logout = () => {
  localStorage.removeItem("user");
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

export {
  login,
  login2,
  logout,
  register,
  getCurrentUser
}
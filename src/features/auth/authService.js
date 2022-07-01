import axios from "axios";
const API_URL = "https://api.oxiltravel.com/api/";
import api from "../../api/api";
// const endpoint_logout = "/logout";

//Register user
const register = async (userData) => {
  const response = await axios.post(API_URL + "register", userData);
  if (response.data) {
    localStorage.setItem("token", JSON.stringify(response.data.user.api_token));
  }
  return response.data.user;
};

const login = async (userData) => {
  const response = await axios.post(API_URL + "login", userData);
  if (response.data.user) {
    localStorage.setItem("token", JSON.stringify(response.data.user.api_token));
  }
  return response.data.user;
};

const logout = async () => {
  // const token = JSON.parse(localStorage.getItem("user"));
  // const url = "https://api.topnotchengineering.com/api/user";
  const url = "logout";
  // const config = {
  //   headers: {
  //     Authorization: `Bearer ${token.api_token}`,
  //   },
  // };

  const response = await api.get(url);
  if (response.data.logout_status) {
    // localStorage.removeItem('user')
    localStorage.clear();
  }
  // return response.data
};

// Password Reset
const resetPassword = async (email) => {
  const response = await axios.post(API_URL + "reset-password", email);
  return response.data;
};

const updatePassword = async (password) => {
  const response = await axios.post(API_URL + "update-password", password);
  return response.data;
};

const authService = {
  register,
  login,
  logout,
  resetPassword,
  updatePassword,
};
export default authService;

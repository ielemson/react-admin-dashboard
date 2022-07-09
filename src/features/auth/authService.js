import apiClient from "../../api/apiClient";
import api from "../../api/api";
// const endpoint_logout = "/logout";

//Register user
const register = async (userData) => {
  const response = await apiClient.post("/register", userData);
  if (response.data) {
    localStorage.setItem("token", JSON.stringify(response.data.user.api_token));
  }
  return response.data.user;
};

const login = async (userData) => {
  const response = await api.post("/login", userData);
  if (response.data.user) {
    localStorage.setItem("token", JSON.stringify(response.data.user.api_token));
    localStorage.setItem("role", JSON.stringify(response.data.role));
  }
  return response.data.user;
};

const logout = async () => {
 
  const response = await api.get("/logout");
  if (response.data.logout_status) {
    localStorage.clear();
  }

};

// Password Reset
const resetPassword = async (email) => {
  const response = await apiClient.post("/reset-password", email);
  return response.data;
};

const updatePassword = async (password) => {
  const response = await apiClient.post("/update-password", password);
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

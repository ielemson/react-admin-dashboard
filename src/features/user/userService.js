import api from "../../api/api";

const getUser = async () => {
  const url = "/user";
  const response = await api.get(url);
  return response.data
};

const getCurUSer = async () => {
  const url = "/user/current";
  const response = await api.get(url);
  return response.data
};

const getUsers = async () => {
  const url = "/users";
  const response = await api.get(url);
  return response.data
};

const updateUser = async (data) => {
  const url = "/user/update";
  const response = await api.post(url,data);
  return response.data
};

const deleteUser = async (id) => {
  const url = "/user/destroy";
  const response = await api.post(url,id);
  return response.data
};

const uploadPicture = async (data) => {
  const url = "/user/upload";
  const response = await api.post(url,data);
  return response.data
};
// check if token is valid
const authCheck = async () => {
  const token = JSON.parse(localStorage.getItem('token'))
  token === null ? token= '': token
  const url = "/check_token/"+token;
  const response = await api.get(url);
  return response.data.isAuthenticated
};

const userService = {
    getUser,
    getUsers,
    getCurUSer,
    authCheck,
    updateUser,
    deleteUser,
    uploadPicture,
};
export default userService;

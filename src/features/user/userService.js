import api from "../../api/api";

const getUser = async () => {
  const url = "/user";
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

const uploadPicture = async (data) => {
  const url = "/user/upload";
  const response = await api.post(url,data);
  return response.data
};
const authCheck = async () => {
  const url = "/check";
  const response = await api.get(url);
  return response.data
};

const userService = {
    getUser,
    getUsers,
    authCheck,
    updateUser,
    uploadPicture,
};
export default userService;

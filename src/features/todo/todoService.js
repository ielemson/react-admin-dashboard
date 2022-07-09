import api from "../../api/api";

const getTodos = async () => {
  const url = "/todos";
  const response = await api.get(url);
  return response.data
};

const todoService = {
   getTodos
};
export default todoService;

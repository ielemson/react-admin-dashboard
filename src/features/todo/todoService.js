import api from "../../api/api";

const getTodos = async () => {
  const url = "/todos";
  const response = await api.get(url);
  return response.data
};

const getAllTodos = async () => {
  const url = "/todos/all";
  const response = await api.get(url);
  return response.data
};

const todoService = {
   getTodos,
   getAllTodos,
};
export default todoService;

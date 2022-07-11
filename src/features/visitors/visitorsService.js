import api from "../../api/api";

const getAllVisitors = async () => {
  const url = "/visitors";
  const response = await api.get(url);
  return response.data
};

const visitorsService = {
  getAllVisitors
};
export default visitorsService;

import axios from "axios";
export const getAllStaredRepos = async (url) => {
  const response = await axios.get(url);
  return response.data.items;
};

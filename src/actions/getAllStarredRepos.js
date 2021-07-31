import axios from "axios";
export const getAllStaredRepos = async (url) => {
  const response = await axios.get(url);
  if (response.status === 200) {
    return response.data.items;
  } else {
    return "Something Went Wrong";
  }
};

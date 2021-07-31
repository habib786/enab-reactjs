import axios from "axios";
import { message } from "antd";

export const getAllStaredRepos = async (url) => {
  const response = await axios.get(url);
  if (response.status === 200) {
    return response.data.items;
  } else {
    message.error("Something Went Wrong");
    return [];
  }
};

import { message } from "antd";
import axios from "axios";
import { getDateOfLastMonth } from "../utils";

export const getAllStarredRepos = async (page) => {
  const url =
    "https://api.github.com/search/repositories?q=created:>" +
    getDateOfLastMonth() +
    `&sort=stars&order=desc&page=${page}`;
  const response = await axios.get(url);
  if (response.status === 200) {
    return response.data.items;
  } else {
    message.error("Something Went Wrong");
    return [];
  }
};

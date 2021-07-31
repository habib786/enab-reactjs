import { message } from "antd";
import axios from "axios";
import groupBy from "lodash/groupBy";
import forEach from "lodash/forEach";
import { assignRank, getDateOfLastMonth, getLanguageRepos } from "../utils";

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

export const getRecentRepos = async () => {
  const url = `https://api.github.com/search/repositories?q=created:>=${getDateOfLastMonth()}&sort=stars&order=desc&per_page=100`;
  const response = await axios.get(url);
  if (response.status === 200) {
    const languages = groupBy(response.data.items, "language");
    const res = [];
    forEach(languages, (l) => {
      if (l[0].language) {
        const obj = {};
        obj.repositories = getLanguageRepos(l);
        obj.name = l[0].language;
        obj.repoCount = l.length;
        obj.rank = 0;
        res.push(obj);
      }
    });
    assignRank([...res]);
    return res;
  } else {
    message.error("Something Went Wrong");
    return [];
  }
};

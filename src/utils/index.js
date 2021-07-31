import map from "lodash/map";

export const getDateOfLastMonth = () => {
  var date = new Date();
  date.setDate(date.getDate() - 30);
  return date.toISOString().split("T")[0];
};

export const getLanguageRepos = (reposList) =>
  map(reposList, (repo) => ({
    repositorie_name: repo["name"],
    owner_name: repo["owner"]["login"],
    repositorie_url: repo["html_url"],
    forks: repo["forks"],
    watchers: repo["watchers"],
    stars: repo["stargazers_count"],
  }));

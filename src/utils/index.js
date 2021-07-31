import forEach from "lodash/forEach";
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

export const assignRank = (arr) => {
  // sort by repo count in descending order
  const sortedArray = arr.sort((a, b) => b.repoCount - a.repoCount);
  let rank = 1;
  forEach(sortedArray, (r, i) => {
    if (i > 0 && sortedArray[i].repoCount < sortedArray[i - 1].repoCount) {
      rank++;
    }
    sortedArray[i].rank = rank;
  });

  return sortedArray;
};

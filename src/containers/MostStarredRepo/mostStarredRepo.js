import { useEffect, useState } from "react";
import "./mostStarredRepo.scss";
import { getAllStaredRepos } from "../../actions/getAllStarredRepos";
import moment from "moment";

const MostStarredRepo = () => {
  const [repos, setRepos] = useState([]);

  const getAllData = async (url) => {
    const res = await getAllStaredRepos(url);
    setRepos(res);
  };
  useEffect(() => {
    const default_url =
      "https://api.github.com/search/repositories?q=created:>" +
      getDate() +
      "&sort=stars&order=desc";
    getAllData(default_url);
  }, []);

  const getDate = () => {
    var date = new Date();
    date.setDate(date.getDate() - 30);
    return date.toISOString().split("T")[0];
  };

  const renderRows = (props) => {
    return (
      <div className="row">
        <div className="avatar-container">
          <img
            className="repo-avatar"
            alt="Repository Avatar"
            src={props.owner.avatar_url}
          />
        </div>
        <div className="content-container">
          <h2 className="title" children={props.name} />

          <p className="text" children={props.description} />

          <div className="bottom-info">
            <div className="info-badge stars">
              Stars: {props.stargazers_count}
            </div>
            <div className="info-badge issues">
              Issues: {props.open_issues_count}
            </div>
            <div className="submit-info">
              Submitted {moment(props.created_at, "YYYYMMDD").fromNow()}
              by {props.owner.login}
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className="list">
      {repos &&
        repos.map((item) => {
          return renderRows(item);
        })}
    </div>
  );
};
export default MostStarredRepo;

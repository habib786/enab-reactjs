import { useEffect, useState } from "react";
import "./mostStarredRepo.scss";
import { getAllStaredRepos } from "../../actions/getAllStarredRepos";
import moment from "moment";
import { Spin, message } from "antd";

const MostStarredRepo = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);

  const getAllData = async (url) => {
    setLoading(true);
    const res = await getAllStaredRepos(url);
    if (typeof res === "string") {
      message.error("Something Went Wrong");
      setLoading(false);
    } else {
      setRepos(res);
      setLoading(false);
    }
  };

  useEffect(() => {
    const url =
      "https://api.github.com/search/repositories?q=created:>" +
      getDate() +
      "&sort=stars&order=desc&page=1&size=10";
    getAllData(url);
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
    <>
      {loading ? (
        <div className="loader">
          <Spin size="large" />
        </div>
      ) : (
        <div className="list">
          {repos &&
            repos.map((item) => {
              return renderRows(item);
            })}
        </div>
      )}
    </>
  );
};
export default MostStarredRepo;

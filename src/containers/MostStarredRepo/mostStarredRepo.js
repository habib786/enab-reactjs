import { message, Spin } from "antd";
import moment from "moment";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { getAllStaredRepos } from "../../actions/getAllStarredRepos";
import "./mostStarredRepo.scss";

const MostStarredRepo = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  const getAllData = async (page) => {
    const url =
      "https://api.github.com/search/repositories?q=created:>" +
      getDate() +
      `&sort=stars&order=desc&page=${page}`;
    const res = await getAllStaredRepos(url);
    if (typeof res === "string") {
      message.error("Something Went Wrong");
      setLoading(false);
    } else {
      setPage(page + 1);
      const data = [...repos, ...res];
      setRepos(data);
      setLoading(false);
    }
  };

  useEffect(() => {
    setLoading(true);
    getAllData(page);
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
        <InfiniteScroll
          dataLength={repos.length}
          next={() => getAllData(page)}
          hasMore={true}
          loader={
            <div className="loader">
              <Spin size="default" />
            </div>
          }
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>--- END ---</b>
            </p>
          }
        >
          <div className="list">
            {repos &&
              repos.map((item) => {
                return renderRows(item);
              })}
          </div>
        </InfiniteScroll>
      )}
    </>
  );
};
export default MostStarredRepo;

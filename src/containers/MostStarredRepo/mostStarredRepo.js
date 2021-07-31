import { Spin } from "antd";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { getAllStaredRepos } from "../../actions/getAllStarredRepos";
import CardListView from "../../components/CardListView/CardListView";
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

    res.length > 0 ? setPage(page + 1) : setPage(page);
    const data = [...repos, ...res];
    setRepos(data);
    setLoading(false);
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
          hasMore={page !== 34 && page < 34}
          loader={
            <div className="loader">
              <Spin size="default" />
            </div>
          }
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>---All Record Shown---</b>
            </p>
          }>
          <div className="list">
            {repos &&
              repos.map((item) => {
                return <CardListView {...item} />;
              })}
          </div>
        </InfiniteScroll>
      )}
    </>
  );
};
export default MostStarredRepo;

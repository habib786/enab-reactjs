import { Spin } from "antd";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import CardListView from "../../components/CardListView/CardListView";
import Loader from "../../components/Loader/Loader";
import { getAllStarredRepos } from "../../service";
import "./mostStarredRepo.scss";

const MostStarredRepo = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setLoading(true);
    getAllData(page);
  }, []);

  const getAllData = async (page) => {
    const res = await getAllStarredRepos(page);

    res.length > 0 ? setPage(page + 1) : setPage(page);
    const data = [...repos, ...res];
    setRepos(data);
    setLoading(false);
  };

  return (
    <>
      {loading ? (
        <Loader />
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
              repos.map((item, key) => {
                return <CardListView key={key} {...item} />;
              })}
          </div>
        </InfiniteScroll>
      )}
    </>
  );
};
export default MostStarredRepo;

import React, { useEffect, useState } from "react";
import { getRecentRepos } from "../../service";
import Loader from "../../components/Loader/Loader";
import RecentRepoListView from "../../components/RecentRepoListView/RecentRepoListView";

const LanguagesRepo = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getAllData();
  }, []);

  const getAllData = async () => {
    const res = await getRecentRepos();

    setRepos(res);
    setLoading(false);
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="list">
          {repos &&
            repos.map((item, key) => {
              return <RecentRepoListView key={key} {...item} />;
            })}
        </div>
      )}
    </>
  );
};

export default LanguagesRepo;

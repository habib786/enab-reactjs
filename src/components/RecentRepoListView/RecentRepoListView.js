import React from "react";
import "./RecentRepoListView.scss";

const RecentRepoListView = ({ name, repoCount, rank }) => {
  return (
    <div className="row">
      <div className="content-container">
        <h2 className="title" children={name} />
        <div className="bottom-info">
          <div className="info-badge stars">Popularity: {rank}</div>
          <div className="info-badge issues">Repos: {repoCount}</div>
        </div>
      </div>
    </div>
  );
};

export default RecentRepoListView;

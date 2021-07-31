import React from "react";
import moment from "moment";
import "./CardListView.scss";

const CardListView = ({
  owner,
  name,
  description,
  stargazers_count,
  open_issues_count,
  created_at,
}) => {
  return (
    <div className="row">
      <div className="avatar-container">
        <img
          className="repo-avatar"
          alt="Repository Avatar"
          src={owner.avatar_url}
        />
      </div>
      <div className="content-container">
        <h2 className="title" children={name} />

        <p className="text" children={description} />

        <div className="bottom-info">
          <div className="info-badge stars">Stars: {stargazers_count}</div>
          <div className="info-badge issues">Issues: {open_issues_count}</div>
          <div className="submit-info">
            Submitted {moment(created_at, "YYYYMMDD").fromNow()}
            by {owner.login}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardListView;

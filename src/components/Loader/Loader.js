import { Spin } from "antd";
import React from "react";
import "./Loader.scss";

const Loader = () => {
  return (
    <div className="loader-spinner">
      <Spin size="large" tip="Loading ..." />
    </div>
  );
};

export default Loader;

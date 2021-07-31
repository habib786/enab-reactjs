import { Col, Layout, Row } from "antd";
import React from "react";
import "./header.scss";

const { Header } = Layout;

class HeaderComponent extends React.Component {
  render() {
    return (
      <Header className="app-header">
        <h3>Enab Code Challenge</h3>
      </Header>
    );
  }
}

export default HeaderComponent;

import { Col, Layout, Row } from "antd";
import React from "react";
import "./header.css";

const { Header } = Layout;

class HeaderComponent extends React.Component {
  render() {
    return (
      <Header className="app-header">
        <Row type="flex" gutter={0}>
          <Col span={20} xs={12} sm={20} md={20} lg={20}>
            <div>
              <h3>Header</h3>
            </div>
          </Col>
        </Row>
      </Header>
    );
  }
}

export default HeaderComponent;

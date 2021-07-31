import { Layout } from "antd";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import MainContainer from "../../containers/Main/Main";
import CustomFooter from "../Footer/Footer";
import HeaderComponent from "../Header/header";
import "./MainLayout.scss";

const { Content } = Layout;

const MainLayout = () => {
  return (
    <Layout className="main-layout">
      <HeaderComponent />
      <Content>
        <div className="main-layout__content-wrap">
          <Router>
            <MainContainer />
          </Router>
        </div>
      </Content>
      <CustomFooter />
    </Layout>
  );
};

export default MainLayout;

import MainContainer from "./containers/Main/Main";
import { Button, Layout, Row, Col, Divider } from "antd";
import HeaderComponent from "./components/Header/header";
import "antd/dist/antd.css";
import CustomFooter from "./components/Footer/Footer";
function App() {
  const { Content } = Layout;

  return (
    <Layout>
      <HeaderComponent />
      <Content>
        <>
          <Divider />
          <Row className="fields-row" gutter={24}>
            <Col span={4} xs={24} sm={4} lg={4}></Col>
            <Col span={20} xs={24} sm={20} lg={20}>
              <Row align="middle" justify="end">
                <Col span={6} xs={24} sm={6} lg={6} className="text-right">
                  <Button
                    size="large"
                    style={{ color: "white", backgroundColor: "#1890ff" }}
                    onClick={() => {}}
                  >
                    Action 1
                  </Button>
                </Col>

                <Col span={6} xs={24} sm={6} lg={6} className="text-right">
                  <Button
                    style={{ color: "white", backgroundColor: "#1890ff" }}
                    size="large"
                    onClick={() => {}}
                  >
                    Action 2
                  </Button>
                </Col>
              </Row>
            </Col>
          </Row>
          <Divider />

          <MainContainer />
        </>
      </Content>
      <CustomFooter />
    </Layout>
  );
}

export default App;

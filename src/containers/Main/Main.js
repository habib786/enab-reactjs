import { Button, Col, Divider, Row } from "antd";
import { Route, useHistory } from "react-router-dom";
import LanguagesRepo from "../LanguagesRepo/LanguagesRepo";
import MostStarredRepo from "../MostStarredRepo/mostStarredRepo";

const MainContainer = () => {
  const history = useHistory();
  return (
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
                onClick={() => history.push("/")}>
                Most Starred Repo
              </Button>
            </Col>

            <Col span={6} xs={24} sm={6} lg={6} className="text-right">
              <Button
                style={{ color: "white", backgroundColor: "#1890ff" }}
                size="large"
                onClick={() => history.push("/recent")}>
                Recent Repo
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
      <Divider />
      <Route exact path="/" component={MostStarredRepo} />
      <Route exact path="/recent" component={LanguagesRepo} />
    </>
  );
};
export default MainContainer;

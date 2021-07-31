import { Layout } from "antd";
import "antd/dist/antd.css";
import { BrowserRouter as Router } from "react-router-dom";
import CustomFooter from "./components/Footer/Footer";
import HeaderComponent from "./components/Header/header";
import MainContainer from "./containers/Main/Main";
function App() {
  const { Content } = Layout;

  return (
    <Layout>
      <HeaderComponent />
      <Content>
        <Router>
          <MainContainer />
        </Router>
      </Content>
      <CustomFooter />
    </Layout>
  );
}

export default App;

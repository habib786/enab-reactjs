import MostStarredRepo from "../MostStarredRepo/mostStarredRepo";
import { BrowserRouter as Router, Route } from "react-router-dom";

const MainContainer = () => {
  return (
    <>
      <Router>
        <Route exact path="/" component={MostStarredRepo} />
      </Router>
    </>
  );
};
export default MainContainer;

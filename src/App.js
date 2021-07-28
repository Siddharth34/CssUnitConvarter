import "./App.css";
import PxToRem from "./Componants/PxToRem";
import PxToPercentage from "./Componants/PxtoPercentage";
import PxToEm from "./Componants/PxToEm";
import NavBar from "./Componants/NavBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={PxToRem} />
          <Route exact path="/PxToPercentage" component={PxToPercentage} />
          <Route exact path="/PxToEm" component={PxToEm} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

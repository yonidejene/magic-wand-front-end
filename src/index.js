import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Pipeline from "./pages/Pipeline.js";
import Company from "./pages/Company.js";
import PortfolioSuccess from "./pages/PortfolioSuccess";
import Research from "./pages/Research.js";

const Routes = () => (
  <Router>
    <div>
      <Route exact path="/" component={Pipeline} />
      <Route path="/pipeline" component={Pipeline} />
      <Route path="/company/:id" component={Company} />
      <Route path="/portfolio" component={PortfolioSuccess} />
      <Route path="/research" component={Research} />
    </div>
  </Router>
);

ReactDOM.render(<Routes />, document.getElementById("root"));

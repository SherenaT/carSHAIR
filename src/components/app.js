import React from "react";
import Header from "./header";
import Home from "./body/Home";
import Footer from "./footer/footer";
import Make from "./body/RoutePages/Make";
import Model from "./body/RoutePages/Model";
import Year from "./body/RoutePages/Year";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div style={{ backgroundColor: "black", color: "white" }}>
        <Header />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/vehicles/GetModelsForMake" exact>
            <Make />
          </Route>
          <Route path="/vehicles/GetModelsForModel" exact>
            <Model />
          </Route>
          <Route path="/vehicles/GetModelsForYear" exact>
            <Year />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

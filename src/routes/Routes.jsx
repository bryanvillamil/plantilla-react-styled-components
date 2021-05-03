import React from "react";
import { Switch, Redirect, Route } from "react-router-dom";
import Home from "../components/pages/Home";
// import Redime from "../components/pages/Redime";

const Routes = () => {
  return (
    <Switch>
      <Redirect from="/" exact to="/home" />
      <Route path="/home" component={Home} />
      {/* <Route path="/redime" component={Redime} /> */}
      <Redirect from="/**" exact to="/home" />
    </Switch>
  );
};

export default Routes;

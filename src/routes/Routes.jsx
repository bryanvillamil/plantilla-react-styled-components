import React from "react";
import { Switch, Redirect, Route } from "react-router-dom";
import Home from "../components/pages/Home";
import ProductDetail from "../components/pages/ProductDetail";
import TuToallitaIdeal from "../components/pages/TuToallitaIdeal";

const Routes = () => {
  return (
    <Switch>
      <Redirect from="/" exact to="/inicio" />
      <Route path="/inicio" component={Home} />
      <Route path="/producto/:title" exact component={ProductDetail} />
      <Route path="/tu-toallita-ideal/" exact component={TuToallitaIdeal} />
      {/* <Redirect from="/**" exact to="/home" /> */}
    </Switch>
  );
};

export default Routes;

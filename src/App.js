import React from "react";
import { HashRouter as Router } from "react-router-dom";

import Routes from "./routes/Routes";
import GlobalStyle from './global-styles';

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <Routes />
    </Router>
  );
}

export default App;

import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "nes.css/css/nes.min.css";
import "./style.css";

import { DetailPage, SearchPage } from "./pages";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/:id">
          <DetailPage />
        </Route>
        <Route path="/">
          <SearchPage />
        </Route>
      </Switch>
    </Router>
  );
};

render(<App />, document.getElementById("root"));

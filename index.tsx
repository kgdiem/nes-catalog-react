import React, { useState, useEffect } from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { API } from "./lib";
import "nes.css/css/nes.min.css";
import "./style.css";

import { DetailPage, SearchPage } from "./pages";

const App = () => {
  const [list, setList] = useState<any>(null);
  const [page, setPage] = useState<number>(1);
  const [query, setQuery] = useState<string>("");

  useEffect(() => {
    doSearch(query, page);
  }, []);

  const doSearch = (query?, page?) => {
    setPage(page);
    setQuery(query);
    API.getList(query, page).then(list => setList(list));
  };

  return (
    <Router>
      <Switch>
        <Route path="/:id">
          <DetailPage />
        </Route>
        <Route path="/">
          <SearchPage
            list={list}
            page={page}
            query={query}
            doSearch={doSearch}
          />
        </Route>
      </Switch>
    </Router>
  );
};

render(<App />, document.getElementById("root"));

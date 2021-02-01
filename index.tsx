import React, { useState, useEffect } from "react";
import { render } from "react-dom";
import "nes.css/css/nes.min.css";
import "./style.css";

import { GameList, Header, Pagination, SearchBar } from "./components";
import { API } from "./lib";

const App = () => {
  const [list, setList] = useState<any>(null);
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    API.getList().then(list => setList(list));
  }, []);

  const search = query => API.getList(query).then(list => setList(list));

  return (
    <div className="p-10">
      <Header />

      <SearchBar onChange={search} />

      <GameList list={list} />

      <Pagination 
        current={page} 
        click={(page) => setPage(page)} 
        pageSize={20} 
        total={list?.count}
      />
    </div>
  );
};

render(<App />, document.getElementById("root"));

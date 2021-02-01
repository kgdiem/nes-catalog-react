import React, { useState, useEffect } from "react";

import { GameList, Header, Pagination, SearchBar } from "../components";
import { API } from "../lib";

export const SearchPage = () => {
  const [list, setList] = useState<any>(null);
  const [page, setPage] = useState<number>(1);
  const [query, setQuery] = useState<string>('');

  const doSearch = (query?, page?) => API.getList(query, page).then(list => setList(list))

  useEffect(() => {
    doSearch();
  }, []);

  const changePage = (pageNum) => {
    setPage(pageNum);

    doSearch(query, pageNum);
  }

  const search = query => {
    setPage(1);
    setQuery(query);

    doSearch(query, 1);
  }

  return (
    <div className="p-10">
      <Header />

      <SearchBar onChange={search} />

      <GameList list={list} />

      <Pagination 
        current={page} 
        click={changePage} 
        pageSize={20} 
        total={list?.count}
      />
    </div>
  );
};
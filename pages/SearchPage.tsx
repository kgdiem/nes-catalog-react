import React from "react";

import { GameList, Header, Pagination, SearchBar } from "../components";

export interface SearchPagePropTypes {
  doSearch: (query?: string, pageNum?: string | number) => void;
  list: any;
  query: string;
  page: string | number;
}

export const SearchPage = ({doSearch, list, query, page}) => {
  return (
    <div className="p-10">
      <Header />

      <SearchBar onChange={query => doSearch(query, 1)} />

      <GameList list={list} />

      <Pagination 
        current={page} 
        click={pageNum => doSearch(query, pageNum)} 
        pageSize={20} 
        total={list?.count}
      />
    </div>
  );
};
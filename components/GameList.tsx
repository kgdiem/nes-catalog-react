import React from "react";
import { GameListItem } from './GameListItem';

export interface GameListPropTypes {
  list: any;
}

export const GameList = ({ list }: GameListPropTypes) => (
  <div>
    {list?.results?.map(result => (
      <div key={result.id} className="mb-20">
        <GameListItem result={result}></GameListItem>
      </div>
    ))}
  </div>
);

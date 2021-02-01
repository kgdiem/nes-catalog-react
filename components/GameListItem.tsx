import React from "react";
import { Link } from "react-router-dom";
import { Rating } from "./Rating";

export interface GameListItemPropTypes {
  result: any;
}

export const GameListItem = ({ result }: GameListItemPropTypes) => {
  return (
    <div className="nes-container with-title is-rounded is-centered mb-10">
      <p className="title">{result.name}</p>

      <div className="game-image-container mb-10">
        <img src={result.background_image} alt={`${result.name} image`} />
      </div>

      <div className="flex justify-content-center mb-20">
        <Rating totalRatings={result.ratings_count} rating={result.rating} />
      </div>

      <div className="text-center">
        <Link to={`/${result.id}`}>View Details</Link>
      </div>
    </div>
  );
};

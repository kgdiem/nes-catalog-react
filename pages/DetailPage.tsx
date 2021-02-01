import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { Rating } from '../components';
import { API } from "../lib";

export const DetailPage = () => {
  const { id } = useParams();
  const [game, setGame] = useState(null);

  useEffect(() => {
    API.getGame(id).then(game => setGame(game));
  }, [id]);

  console.log(game);

  if (!game) {
    return <div />;
  }

  return (
    <div className="p-10">
      <div className="mb-10">
        <Link to="/">&lt; Back</Link>
      </div>

      <div className="text-center mb-10">
        <h2>{game.name}</h2>

        <div className="game-image-container">
          <img src={game.background_image} />
        </div>
      </div>

      <div className="nes-container with-title mb-10">
        <p className="title">Description</p>
        <div>{game.description_raw}</div>
      </div>

      <div className="nes-container with-title">
        <p className="title">Ratings</p>
        <Rating totalRatings={game.ratings_count} rating={game.rating}/>
      </div>
    </div>
  );
};

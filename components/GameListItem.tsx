import React from "react";

export interface GameListItemPropTypes {
  result: any;
}

export const GameListItem = ({ result }: GameListItemPropTypes) => {
  const stars = [];

  for (let i = 0; i < 5; i++) {
    const total = result.rating - i;

    if (total > 1) {
      stars.push(<i className="nes-icon star" key={i} />);
    } else if (total > 0.4) {
      stars.push(<i className="nes-icon star is-half" key={i} />);
    } else {
      stars.push(<i className="nes-icon star is-empty" key={i} />);
    }
  }
  return (
    <div className="nes-container with-title is-rounded is-centered mb-10">
      <p className="title">{result.name}</p>

      <div className="game-image-container mb-10">
        <img src={result.background_image} alt={`${result.name} image`} />
      </div>

      <div className="flex justify-content-center align-items-end">
        <div aria-label={`${result.rating} stars out of 5`}>{stars}</div>

        <span aria-label={`${result.ratings_count} total ratings`}>
          ({result.ratings_count})
        </span>
      </div>
    </div>
  );
};

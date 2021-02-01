import React from "react";

export interface RatingPropTypes {
  rating: number;
  totalRatings: number;
}

export const Rating = ({ rating, totalRatings }: RatingPropTypes) => {
  const stars = [];

  for (let i = 0; i < 5; i++) {
    const total = rating - i;

    if (total > 1) {
      stars.push(<i className="nes-icon star" key={i} />);
    } else if (total > 0.4) {
      stars.push(<i className="nes-icon star is-half" key={i} />);
    } else {
      stars.push(<i className="nes-icon star is-empty" key={i} />);
    }
  }

  return (
    <div className="flex align-items-end">
      <div aria-label={`${rating} stars out of 5`}>{stars}</div>

      <span aria-label={`${totalRatings} total ratings`}>({totalRatings})</span>
    </div>
  );
};

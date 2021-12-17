import React from "react";

export const RatingStars = ({ numberStars }) => {
  // console.log("numberStars", numberStars);
  return (
    <div className="rating">
      {[...Array(numberStars)].map((x, i) => {
        return (
          <img
            src="./assets/icons/Star Fill.svg"
            alt=""
            className="rating-star"
          />
        );
      })}
    </div>
  );
};

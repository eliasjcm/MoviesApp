import React from "react";
import { movieGenres } from "../../data/movies";
import { CategoryFrame } from "../ui/CategoryFrame";
import { RatingStars } from "../ui/RatingStars";

export const MovieCard = ({
  poster_path,
  genre,
  original_title,
  vote_average,
}) => {
  // console.log("vote_average", vote_average);
  return (
    <div
      className="card"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url(https://image.tmdb.org/t/p/w500${poster_path})`,
        margin: 0,
        padding: 0,
      }}
    >
      {/* <img src= alt="" /> */}
      <CategoryFrame name={movieGenres.get(genre)} className="card-category" />
      <RatingStars numberStars={Math.round(vote_average / 2)} />
      <p className="card-name">{original_title}</p>
    </div>
  );
};

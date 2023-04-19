import React from "react";
import { movieGenres } from "../../data/movies";
import { CategoryFrame } from "../ui/CategoryFrame";
import { RatingStars } from "../ui/RatingStars";
import { useNavigate } from "react-router-dom";

export const MovieCard = ({
  poster_path,
  genre,
  original_title,
  vote_average,
  genre_ids,
  innerRef,
  id,
}) => {
  const navigate = useNavigate();
  const handleClick = (e) => {
    console.log(id);
    navigate("/movies/" + id);
  };

  if (!poster_path) console.log("no image", original_title);
  return (
    <div
      onClick={handleClick}
      ref={innerRef}
      className="card card-movie"
      style={{
        backgroundImage: poster_path
          ? `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.4)), url(https://image.tmdb.org/t/p/w500${poster_path})`
          : `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url(https://image.shutterstock.com/image-vector/silhouette-missing-person-stamp-260nw-752963539.jpg)`,
        // margin: 0,
        padding: 0,
      }}
    >
      {/* <img src= alt="" /> */}
      <div className="card-movie__hover-info">
        <p>View movie info</p>
        <img
          src="/assets/icons/Arrow-Right.svg"
          alt=""
          // className="carousel-arrow-right"
        />
      </div>
      <CategoryFrame
        name={movieGenres.get(genre_ids ? genre_ids[0] : genre)}
        className="card-category"
      />
      <RatingStars numberStars={Math.round(vote_average / 2)} />
      <p className="card-name">{original_title}</p>
    </div>
  );
};

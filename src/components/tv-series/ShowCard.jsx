import React from "react";
import { useNavigate } from "react-router-dom";
import { showGenres } from "../../data/shows";
import { CategoryFrame } from "../ui/CategoryFrame";
import { RatingStars } from "../ui/RatingStars";

export const ShowCard = ({
  poster_path,
  genre_ids,
  original_name,
  vote_average,
  innerRef,
  id
}) => {
  const genre = genre_ids && (genre_ids.length > 0 ? genre_ids[0] : null);
  const navigate = useNavigate();

  const handleClick = (e) => {
    console.log(id);
    navigate("/shows/" + id);
  };
  // console.log("vote_average", vote_average);
  return (
    <div
      ref={innerRef}
      className="card show-card"
      onClick={handleClick}
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.4)), url(https://image.tmdb.org/t/p/w500${poster_path})`,
        margin: 0,
        padding: 0,
      }}
    >
      <div className="show-card__hover-info">
        <p>View show info</p>
        <img
          src="/assets/icons/Arrow-Right.svg"
          alt=""
          // className="carousel-arrow-right"
        />
      </div>
      {/* <img src= alt="" /> */}
      {genre && (
        <CategoryFrame name={showGenres.get(genre)} className="card-category" />
      )}
      <RatingStars numberStars={Math.round(vote_average / 2)} />
      <p className="card-name">{original_name}</p>
    </div>
  );
};

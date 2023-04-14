import React from "react";
import { useNavigate } from "react-router-dom";
import { movieGenres } from "../../data/movies";

// import { ratingToStarsNumber } from "../../utils/ratingToStarsNumber";
import { CategoryFrame } from "../ui/CategoryFrame";
import { RatingStars } from "../ui/RatingStars";


export const MoviePoster = ({ currentMovie }) => {
const navigate = useNavigate();
  const handleMoreInfo = () => {
    navigate(`/movies/${currentMovie.id}`);
  };

  return (
    <div
      className="poster-movie"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5)), url(https://image.tmdb.org/t/p/original${currentMovie.backdrop_path})`,
      }}
    >
      <div className="poster-movie-info">
        <CategoryFrame
          name={movieGenres.get(currentMovie.genre_ids[1])}
          className="card-category"
        />
        <RatingStars numberStars={Math.round(currentMovie.vote_average / 2)} />
        <p className="poster-movie-name">{currentMovie.original_title}</p>
        <p className="poster-movie-ovw">{currentMovie.overview}</p>
        <button className="poster-movie-watch-btn" onClick={handleMoreInfo}>More Info</button>
      </div>
    </div>
  );
};

import React from "react";
import { movieGenres } from "../../data/movies";

// import { ratingToStarsNumber } from "../../utils/ratingToStarsNumber";
import { CategoryFrame } from "../ui/CategoryFrame";
import { RatingStars } from "../ui/RatingStars";

export const MoviePoster = ({ currentMovie }) => {
  return (
    <div
      className="poster-movie"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url(https://image.tmdb.org/t/p/original${currentMovie.backdrop_path})`,
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
        <span className="poster-movie-watch-btn">Watch now</span>
      </div>
    </div>
  );
};

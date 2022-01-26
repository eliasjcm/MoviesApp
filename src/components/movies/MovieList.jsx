import React from "react";
import "../../MoviesApp.css";

import { MovieCard } from "./MovieCard";

/*

*/
import "react-alice-carousel/lib/alice-carousel.css";
import { ItemsCarousel } from "../ui/ItemsCarousel";

const handleDragStart = (e) => e.preventDefault();

export const MovieList = ({ movieList }) => {
  const movies = movieList.map((movie) => {
    return (
      <MovieCard
        key={movie.id}
        poster_path={movie.poster_path}
        genre={movie.genre_ids[0]}
        original_title={movie.original_title}
        vote_average={movie.vote_average}
        onDragStart={handleDragStart}
        id={movie.id}
      />
    );
  });

  return (
    <div className="carousel movie-carousel">
      <ItemsCarousel items={movies} />
      {/* <img
        src="./assets/icons/Arrow-Right.svg"
        alt=""
        className="carousel-arrow-right"
        onClick={() => this.Carousel.slideNext()}
      /> */}
    </div>
  );
};

import React from "react";
import "../../MoviesApp.css";

import { MovieCard } from "./MovieCard";

/*

*/
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const handleDragStart = (e) => e.preventDefault();

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 3 },
};

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
      />
    );
  });

  const renderNextBtn = ({ isDisabled }) => {
    return (
      <img
        src="./assets/icons/another.svg"
        alt=""
        className="carousel-arrow-right"
      />
    );
  };

  const renderNextButton = ({ isDisabled }) => {
    return (
      <div style={{ opacity: isDisabled ? "0.5" : 1 }}>
        <img
          src="./assets/icons/Arrow-Right.svg"
          alt=""
          className="carousel-arrow-right"
        />
      </div>
    );
  };

  const renderLeftButton = ({ isDisabled }) => {
    return (
      <div style={{ opacity: isDisabled ? "0.5" : 1 }}>
        <img
          src="./assets/icons/Arrow-Left.svg"
          alt=""
          className="carousel-arrow-left"
        />
      </div>
    );
  };

  return (
    <div className="carousel movie-carousel">
      <AliceCarousel
        mouseTracking
        items={movies}
        infinite={true}
        //   responsive={responsive}
        disableDotsControls
        // disableButtonsControls
        autoWidth={true}
        controlsStrategy="alternate"
        renderNextButton={renderNextButton}
        renderPrevButton={renderLeftButton}
      />
      {/* <img
        src="./assets/icons/Arrow-Right.svg"
        alt=""
        className="carousel-arrow-right"
        onClick={() => this.Carousel.slideNext()}
      /> */}
    </div>
  );
};

import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "../../MoviesApp.css";
import { MoviePoster } from "../poster/MoviePoster";

export const PosterSection = ({ movieList }) => {
  const [currentMovies /*, setCurrentMovies*/] = useState(movieList);
  const movies = currentMovies
    .sort(() => 0.5 - Math.random())
    .slice(0, 3)
    .map((movie) => {
      return <MoviePoster currentMovie={movie} />;
    });

  console.log("movieList", movieList);
  console.log("currentMovie", currentMovies);

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

  const responsive = {
    0: { items: 1 },
  };

  return (
    <div className="poster-part">
      <div className="poster-user-icons">
        <img
          src={`./assets/icons/Account.svg`}
          alt=""
          className="poster-icon-account"
        />
        <img
          src={`./assets/icons/Settings.svg`}
          alt=""
          className="poster-icon-Settings"
        />
      </div>
      <AliceCarousel
        mouseTracking
        items={movies}
        infinite={true}
        responsive={responsive}
        // disableDotsControls
        // disableButtonsControls
        autoWidth={true}
        controlsStrategy="alternate"
        renderNextButton={renderNextButton}
        renderPrevButton={renderLeftButton}
      />
    </div>
  );
};

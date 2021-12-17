import React from "react";
import "../../MoviesApp.css";

export const AppFrame = () => {
  return (
    <div className="app-frame">
      <img src={`./assets/icons/log.png`} alt="" className="frame-home-logo" />
      <img src={`./assets/icons/Home.svg`} alt="" className="frame-home-icon" />
      <img
        src={`./assets/icons/Movie.svg`}
        alt=""
        className="frame-home-movie"
      />
      <img src={`./assets/icons/TV.svg`} alt="" className="frame-home-tv" />
      <img
        src={`./assets/icons/Star Stroke.svg`}
        alt=""
        className="frame-home-star"
      />
    </div>
  );
};

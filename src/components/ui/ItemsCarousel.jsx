import React from "react";
import AliceCarousel from "react-alice-carousel";

export const ItemsCarousel = ({ items }) => {
  const renderNextButton = ({ isDisabled }) => {
    return (
      <div style={{ opacity: isDisabled ? "0.5" : 1 }}>
        <img
          src="/assets/icons/Arrow-Right.svg"
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
          src="/assets/icons/Arrow-Left.svg"
          alt=""
          className="carousel-arrow-left"
        />
      </div>
    );
  };

  return (
    <AliceCarousel
      mouseTracking
      items={items}
      infinite={true}
      //   responsive={responsive}
      disableDotsControls
      // disableButtonsControls
      autoWidth={true}
      controlsStrategy="alternate"
      renderNextButton={renderNextButton}
      renderPrevButton={renderLeftButton}
    />
  );
};

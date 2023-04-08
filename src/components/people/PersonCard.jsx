import React from "react";
import { useNavigate } from "react-router-dom";

export const PersonCard = ({ character, name, profile_path, innerRef, id }) => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    console.log(id);
    navigate("/person/" + id);
  };
  return (
    <div
      onClick={handleClick}
      ref={innerRef}
      className="card-person"
      style={{
        //   background: `linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)),
        // url("https://image.tmdb.org/t/p/original/ncF4HivY2W6SQW5dEP3N3I4mfT0.jpg")`,
        backgroundImage: profile_path
          ? `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7)), url(https://image.tmdb.org/t/p/original${profile_path})`
          : `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7)), url(https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-4-user-grey-d8fe957375e70239d6abdd549fd7568c89281b2179b5f4470e2e12895792dfa5.svg)`,
        // borderColor: "red",
      }}
    >
      <div className="card-person__name">{name}</div>
      {character && <div className="card-person__character">{character}</div>}
      <div className="card-person__hover-info">
        <p>View show info</p>
        <img
          src="/assets/icons/Arrow-Right.svg"
          alt=""
          // className="carousel-arrow-right"
        />
      </div>
    </div>
  );
};

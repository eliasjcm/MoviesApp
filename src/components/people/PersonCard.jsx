import React from "react";

export const PersonCard = ({ character, name, profile_path }) => {
  return (
    <div
      className="card-person"
      style={{
        //   background: `linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)),
        // url("https://image.tmdb.org/t/p/original/ncF4HivY2W6SQW5dEP3N3I4mfT0.jpg")`,
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7)), url(https://image.tmdb.org/t/p/original${profile_path})`,
        // borderColor: "red",
      }}
    >
      <div className="card-person__name">{name}</div>
      <div className="card-person__character">{character}</div>
    </div>
  );
};

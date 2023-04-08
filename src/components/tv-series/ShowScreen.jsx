import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import { movieGenres } from "../../data/movies";
import { PersonCard } from "../people/PersonCard";
import { AppFrame } from "../ui/AppFrame";
import { CategoryFrame } from "../ui/CategoryFrame";
import { ItemsCarousel } from "../ui/ItemsCarousel";
import { RatingStars } from "../ui/RatingStars";

// const hasActors = (list) => {
//   second;
// };

export const ShowScreen = () => {
  const { showId } = useParams();
  const [statusState, setStatusState] = useState({
    status: "",
  });
  const [showState, setShowState] = useState();

  const [crewState, setCrewState] = useState([]);

  useEffect(() => {
    setStatusState({
      status: "loading",
    });
    const fetchData = async () => {
      try {
        const showReq = await fetch(
          `https://api.themoviedb.org/3/tv/${showId}?api_key=83ca2fe5c9ab820ce8ef50911a50c826
        `
        );
        if (!showReq.ok) {
          setStatusState({
            status: "error",
          });
          return;
        }
        const result = await showReq.json();

        console.log("result", result);
        setShowState(result);

        setStatusState({
          status: "loaded",
        });

        document.title = result.title;
      } catch (err) {
        console.log("ErrorSA");
        setStatusState({
          status: "error",
        });
      }
      try {
        const peopleReq = await fetch(
          `https://api.themoviedb.org/3/movie/${showId}/credits?api_key=83ca2fe5c9ab820ce8ef50911a50c826
          `
        );

        const resultPeople = await peopleReq.json();
        console.log("resultPeople", resultPeople);
        setCrewState(resultPeople.cast);
      } catch (err) {
        console.log("ErrorSA");
      }
    };

    fetchData();
  }, [showId]);

  return (
    <>
      <AppFrame />
      <div className="movie-page">
        {statusState.status === "loading" && (
          <div className="movie__loading-container">
            <img
              src={`/assets/icons/spinner-solid.svg`}
              alt=""
              className="movie__loading-spinner"
            />
            <p className="movie__loading-text">Your show is loading.</p>
          </div>
        )}
        {statusState.status === "loaded" && (
          <div
            className="movie-container"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), url(https://image.tmdb.org/t/p/original${showState.backdrop_path})`,
            }}
          >
            {/* https://image.tmdb.org/t/p/original/zp33lkXqcZWyr7iMxzt3lNDtcPv.jpg */}

            <div className="movie__main-content">
              <img
                src={`https://image.tmdb.org/t/p/w500${showState.poster_path}`}
                alt=""
                className="movie__poster"
              />
              <div className="movie__info">
                <h1 className="movie__title">
                  {showState.title}{" "}
                  {`(${new Date(showState.release_date).getFullYear()})`}
                </h1>
                <p className="movie__description">{showState.overview}</p>
                {/* <div className="movie__categories">
              <CategoryFrame
                name={movieGenres.get(genre_ids ? genre_ids[0] : genre)}
                className="card-category"
              />
            </div>
            <RatingStars numberStars={Math.round(vote_average / 2)} /> */}

                {/***********************/}
                <div className="movie__categories">
                  <CategoryFrame name={"Action"} className="card-category" />
                  <CategoryFrame name={"Comics"} className="card-category" />
                </div>
                <div className="movie__rating">
                  <RatingStars
                    numberStars={Math.round(showState.vote_average / 2)}
                  />
                  <p className="movie__rating-info">
                    {`${showState.vote_average / 2}/5 (${
                      showState.vote_count
                    })`}
                  </p>
                </div>
                {/***********************/}

                <div className="movie__feature">
                  <span className="movie__feature-name">Budget: </span>
                  {showState.budget === null || showState.budget === 0
                    ? "Unknown"
                    : "$" +
                      showState.budget
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                </div>
                {showState.release_date && (
                  <div className="movie__feature">
                    <span className="movie__feature-name">Release Date: </span>
                    {showState.release_date}
                  </div>
                )}
                {showState.runtime && (
                  <div className="movie__feature">
                    <span className="movie__feature-name">Runtime: </span>
                    {showState.runtime} minutes
                  </div>
                )}
                {showState.status && (
                  <div className="movie__feature">
                    <span className="movie__feature-name">Status: </span>
                    {showState.status}
                  </div>
                )}
              </div>
              {showState.belongs_to_collection && (
                <div className="movie__collections">
                  <h2 className="movie__collections-title">Collection</h2>
                  <img
                    src={`https://image.tmdb.org/t/p/w500${showState.belongs_to_collection.poster_path}`}
                    alt=""
                  />
                  {showState.belongs_to_collection.name}
                </div>
              )}
            </div>
            {crewState && crewState !== [] && (
              <div className="movie__crew">
                <h3 className="movie__crew-title">Crew</h3>
                <ItemsCarousel
                  items={crewState.slice(0, 15).map((person) => {
                    return <PersonCard {...person} />;
                  })}
                />
              </div>
            )}
          </div>
        )}
        {statusState.status === "error" && (
          <div className="movie__error-container">
            <img
              src={`/assets/icons/exclamation-circle-solid.svg`}
              alt=""
              className="movie__error-spinner"
            />
            <p className="movie__loading-text">Show not found.</p>
          </div>
        )}
      </div>
    </>
  );
};

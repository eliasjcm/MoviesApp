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

export const MovieScreen = () => {
  const { movieId } = useParams();
  const [statusState, setStatusState] = useState({
    status: "",
  });
  const [movieState, setMovieState] = useState();

  const [crewState, setCrewState] = useState([]);

  useEffect(() => {
    setStatusState({
      status: "loading",
    });
    const fetchData = async () => {
      try {
        const movieReq = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}?api_key=83ca2fe5c9ab820ce8ef50911a50c826
        `
        );
        if (!movieReq.ok) {
          setStatusState({
            status: "error",
          });
          return;
        }
        const result = await movieReq.json();

        console.log("result", result);
        setMovieState(result);

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
          `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=83ca2fe5c9ab820ce8ef50911a50c826
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
  }, [movieId]);

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
            <p className="movie__loading-text">Your movie is loading.</p>
          </div>
        )}
        {statusState.status === "loaded" && (
          <div
            className="movie-container"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), url(https://image.tmdb.org/t/p/original${movieState.backdrop_path})`,
            }}
          >
            {/* https://image.tmdb.org/t/p/original/zp33lkXqcZWyr7iMxzt3lNDtcPv.jpg */}

            <div className="movie__main-content">
              <img
                src={`https://image.tmdb.org/t/p/w500${movieState.poster_path}`}
                alt=""
                className="movie__poster"
              />
              <div className="movie__info">
                <h1 className="movie__title">
                  {movieState.title}{" "}
                  {`(${new Date(movieState.release_date).getFullYear()})`}
                </h1>
                <p className="movie__description">{movieState.overview}</p>
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
                    numberStars={Math.round(movieState.vote_average / 2)}
                  />
                  <p className="movie__rating-info">
                    {`${movieState.vote_average / 2}/5 (${
                      movieState.vote_count
                    })`}
                  </p>
                </div>
                {/***********************/}

                <div className="movie__feature">
                  <span className="movie__feature-name">Budget: </span>
                  {"$" +
                    movieState.budget
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                </div>
                {movieState.release_date && (
                  <div className="movie__feature">
                    <span className="movie__feature-name">Release Date: </span>
                    {movieState.release_date}
                  </div>
                )}
                {movieState.runtime && (
                  <div className="movie__feature">
                    <span className="movie__feature-name">Runtime: </span>
                    {movieState.runtime} minutes
                  </div>
                )}
                {movieState.status && (
                  <div className="movie__feature">
                    <span className="movie__feature-name">Status: </span>
                    {movieState.status}
                  </div>
                )}
              </div>
              <div className="movie__collections">
                <h2 className="movie__collections-title">Collection</h2>
                <img
                  src="https://image.tmdb.org/t/p/w500/bp5PqLa06QA1LsELA1SsKZ008H7.jpg"
                  alt=""
                />
                Spider-Man Collection
              </div>
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
            <p className="movie__loading-text">Movie not found.</p>
          </div>
        )}
      </div>
    </>
  );
};

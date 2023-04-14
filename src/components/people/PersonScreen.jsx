import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MovieCard } from "../movies/MovieCard";
// import { movieGenres } from "../../data/movies";
import { PersonCard } from "../people/PersonCard";
import { AppFrame } from "../ui/AppFrame";
import { CategoryFrame } from "../ui/CategoryFrame";
import { ItemsCarousel } from "../ui/ItemsCarousel";
import { RatingStars } from "../ui/RatingStars";
import { PersonMovies } from "./PersonMovies";
import { PersonProductionsGroup } from "./PersonProductionsGroup";

// const hasActors = (list) => {
//   second;
// };

const mostFamousProductionImage = (movies, shows) => {
  // movies should be movies.cast and movies.crew
  const moviesList = movies.cast.concat(movies.crew);
  // shows should be shows.cast and shows.crew
  const showsList = shows.cast.concat(shows.crew);

  const moviesWithBackdrop = moviesList.filter((movie) => movie.backdrop_path);
  const showsWithBackdrop = showsList.filter((show) => show.backdrop_path);

  // sort by popularity
  moviesWithBackdrop.sort((a, b) => b.popularity - a.popularity);
  showsWithBackdrop.sort((a, b) => b.popularity - a.popularity);

  // get the most popular movie/show
  const mostPopularMovie = moviesWithBackdrop[0];
  const mostPopularShow = showsWithBackdrop[0];

  if (!mostPopularMovie && !mostPopularShow) {
    return null;
  }

  if (!mostPopularMovie) {
    return mostPopularShow.backdrop_path;
  }

  if (!mostPopularShow) {
    return mostPopularMovie.backdrop_path;
  }

  // compare popularity
  if (mostPopularMovie.popularity > mostPopularShow.popularity) {
    return mostPopularMovie.backdrop_path;
  } else {
    return mostPopularShow.backdrop_path;
  }
};

export const PersonScreen = () => {
  const { personId } = useParams();
  const [statusState, setStatusState] = useState({
    status: "",
  });
  const [personState, setPersonState] = useState();
  const [moviesState, setMoviesState] = useState();
  const [showsState, setShowsState] = useState();
  const [moviesStateFilter, setMoviesStateFilter] = useState("cast");
  const [showsStateFilter, setShowsStateFilter] = useState("cast");

  useEffect(() => {
    setStatusState({
      status: "loading",
    });
    const fetchData = async () => {
      try {
        const personReq = await fetch(
          `https://api.themoviedb.org/3/person/${personId}?api_key=83ca2fe5c9ab820ce8ef50911a50c826
        `
        );
        if (!personReq.ok) {
          setStatusState({
            status: "error",
          });
          return;
        }
        const result = await personReq.json();

        console.log("result", result);
        setPersonState(result);

        document.title = result.name;

        const moviesReq = await fetch(
          `https://api.themoviedb.org/3/person/${personId}/movie_credits?api_key=83ca2fe5c9ab820ce8ef50911a50c826`
        );
        if (!moviesReq.ok) {
          setStatusState({
            status: "error",
          });
          return;
        }
        const moviesResult = await moviesReq.json();
        setMoviesState(moviesResult);
        console.log("moviesResult", moviesResult);

        const showsReq = await fetch(
          `https://api.themoviedb.org/3/person/${personId}/tv_credits?api_key=83ca2fe5c9ab820ce8ef50911a50c826`
        );
        if (!showsReq.ok) {
          setStatusState({
            status: "error",
          });
          return;
        }
        const showsResult = await showsReq.json();
        setShowsState(showsResult);
        console.log("showsResult", showsResult);

        setStatusState({
          status: "loaded",
        });
      } catch (err) {
        console.log("ErrorSA");
        setStatusState({
          status: "error",
        });
      }
    };

    fetchData();
  }, [personId]);

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
            <p className="movie__loading-text">Your person is loading.</p>
          </div>
        )}
        {statusState.status === "loaded" && (
          <div
            className="movie-container"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), url(https://image.tmdb.org/t/p/original${mostFamousProductionImage(
                moviesState,
                showsState
              )})`,
              backgroundAttachment: "fixed",
            }}
          >
            {/* https://image.tmdb.org/t/p/original/zp33lkXqcZWyr7iMxzt3lNDtcPv.jpg */}

            <div className="movie__main-content">
              <img
                src={`https://image.tmdb.org/t/p/w500${personState.profile_path}`}
                alt=""
                className="movie__poster"
              />
              <div className="movie__info">
                <h1 className="movie__title">{personState.name}</h1>
                <p className="movie__description">
                  {personState.biography.split("\n\n").slice(0, 1).join("\n\n")}
                </p>
                <div className="movie__features">
                  {personState?.place_of_birth && (
                    <div className="movie__feature">
                      <span className="movie__feature-name">
                        Place of Birth:{" "}
                      </span>
                      {personState.place_of_birth}
                    </div>
                  )}
                  {personState?.birthday && (
                    <div className="movie__feature">
                      <span className="movie__feature-name">Birthday: </span>
                      {personState.birthday}
                    </div>
                  )}
                  {personState?.status && (
                    <div className="movie__feature">
                      <span className="movie__feature-name">Status: </span>
                      {personState.status}
                    </div>
                  )}
                </div>
              </div>
            </div>
            <PersonProductionsGroup
              productionState={moviesState}
              productionStateFilter={moviesStateFilter}
              setProductionStateFilter={setMoviesStateFilter}
              type="MOVIE"
            />
            <PersonProductionsGroup
              productionState={showsState}
              productionStateFilter={showsStateFilter}
              setProductionStateFilter={setShowsStateFilter}
              type="TV"
            />
          </div>
        )}

        {statusState.status === "error" && (
          <div className="movie__error-container">
            <img
              src={`/assets/icons/exclamation-circle-solid.svg`}
              alt=""
              className="movie__error-spinner"
            />
            <p className="movie__loading-text">Person not found.</p>
          </div>
        )}
      </div>
    </>
  );
};

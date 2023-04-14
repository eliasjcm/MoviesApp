import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import { movieGenres } from "../../data/movies";
import { PersonCard } from "../people/PersonCard";
import { AppFrame } from "../ui/AppFrame";
import { CategoryFrame } from "../ui/CategoryFrame";
import { ItemsCarousel } from "../ui/ItemsCarousel";
import { RatingStars } from "../ui/RatingStars";
// import season1State from "./season1";
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

  const [seasonsState, setSeasonsState] = useState({});

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

        document.title = result.original_name;
        const showSeasons = {};
        result.seasons.forEach((season) => {
          showSeasons[season.season_number] = {
            season_number: season.season_number,
            info: null,
            show: false,
            status: "loading",
          };
        });
        setSeasonsState(showSeasons);
        console.log("showSeasons", showSeasons);
      } catch (err) {
        console.log("ErrorSA");
        setStatusState({
          status: "error",
        });
      }
      try {
        const peopleReq = await fetch(
          `https://api.themoviedb.org/3/tv/${showId}/credits?api_key=83ca2fe5c9ab820ce8ef50911a50c826
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

  const handleSeasonClick = (seasonNumber) => {
    // check if season episodes are loaded
    const season = seasonsState[seasonNumber];

    if (season.status !== "loaded") {
      // load season episodes
      const fetchData = async () => {
        try {
          const seasonReq = await fetch(
            `https://api.themoviedb.org/3/tv/${showId}/season/${seasonNumber}?api_key=83ca2fe5c9ab820ce8ef50911a50c826`
          );
          if (!seasonReq.ok) {
            season.status = "error";
            setSeasonsState({ ...seasonsState });
            return;
          }
          const result = await seasonReq.json();
          season.info = result;
          season.status = "loaded";
          setSeasonsState({ ...seasonsState });
        } catch (err) {
          console.log("ErrorSA");
          season.status = "error";
          setSeasonsState({ ...seasonsState });
        }
      };
      fetchData();
      season.show = !season.show;
      console.log("Season", season);
      setSeasonsState({ ...seasonsState });
    } else if (season.status !== "error") {
      season.show = !season.show;
      setSeasonsState({ ...seasonsState });
    }
  };

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
              backgroundAttachment: "fixed",
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
                <h1 className="movie__title">{showState.original_name}</h1>
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

                {showState.first_air_date && (
                  <div className="movie__feature">
                    <span className="movie__feature-name">First Air: </span>
                    {showState.first_air_date}
                  </div>
                )}
                {showState.number_of_seasons && (
                  <div className="movie__feature">
                    <span className="movie__feature-name">Seasons: </span>
                    {showState.number_of_seasons}{" "}
                    {showState.number_of_seasons > 1 ? "Seasons" : "Season"}
                  </div>
                )}
                {showState.number_of_episodes && (
                  <div className="movie__feature">
                    <span className="movie__feature-name">Episodes: </span>
                    {showState.number_of_episodes}{" "}
                    {showState.number_of_episodes > 1 ? "Episodes" : "Episode"}
                  </div>
                )}
                {showState?.networks && showState.networks.length > 0 && (
                  <div className="movie__feature">
                    <span className="movie__feature-name">Producer: </span>
                    {showState.networks[0].name} (
                    {showState.networks[0].origin_country})
                  </div>
                )}
                {showState?.status && (
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
            {showState.seasons && showState.seasons !== [] && (
              <div className="movie__seasons">
                <h3 className="movie__seasons-title">Season</h3>
                {Object.keys(showState.seasons).map((season_key, idx) => {
                  const season = showState.seasons[season_key];
                  const seasonNumber = season.season_number;

                  return (
                    <div className="movie__season">
                      <div className="movie__season-info">
                        <img
                          className="movie__season-info__img"
                          src={`https://image.tmdb.org/t/p/w500${season.poster_path}`}
                          alt=""
                        />
                        <div className="movie__season-info__text">
                          <h4 className="movie__season-info__text__title">
                            {season.name}
                            {season?.air_date &&
                              ` (${season.air_date.slice(0, 4)})`}
                          </h4>
                          <p className="movie__season-info__text__episodes-count">
                            {season.episode_count}
                            {season.episode_count > 1
                              ? " Episodes"
                              : " Episode"}
                          </p>
                          <p className="movie__season-info__text__description">
                            {season.overview}
                          </p>
                        </div>
                      </div>

                      {seasonsState[seasonNumber]?.show &&
                        seasonsState[seasonNumber].status === "loaded" && (
                          <>
                            <div className="movie__season-divider"></div>
                            <div className="movie__season-episodes">
                              {seasonsState[seasonNumber].info.episodes.map(
                                (episode) => {
                                  return (
                                    <>
                                      <div className="movie__season-episode">
                                        <img
                                          className="movie__season-episode__img"
                                          src={`https://image.tmdb.org/t/p/w500${episode.still_path}`}
                                          alt=""
                                        />
                                        <div className="movie__season-episode__text">
                                          <div className="movie__season-episode__text__title">
                                            <h4 className="movie__season-episode__text__title__name">
                                              <span className="movie__season-episode__text__title__name-number">
                                                {episode.episode_number}.
                                              </span>
                                              {episode.name}
                                              {episode?.air_date && (
                                                <span className="movie__season-episode__text__title__name-date">
                                                  ({episode.air_date})
                                                </span>
                                              )}
                                            </h4>
                                            {episode?.runtime && (
                                              <p className="movie__season-episode__text__title__duration">
                                                {episode.runtime}
                                                {episode.runtime > 1
                                                  ? " mins"
                                                  : " min"}
                                              </p>
                                            )}
                                          </div>
                                          <p className="movie__season-episode__text__description">
                                            {episode.overview}
                                          </p>
                                        </div>
                                      </div>
                                      {episode.episode_number !==
                                        seasonsState[seasonNumber].info.episodes
                                          .length && (
                                        <div className="movie__season-mid-divider"></div>
                                      )}
                                    </>
                                  );
                                }
                              )}

                              <div className="movie__season-footer">
                                <button
                                  onClick={() =>
                                    handleSeasonClick(seasonNumber)
                                  }
                                >
                                  Hide episodes
                                </button>
                              </div>
                            </div>
                          </>
                        )}
                      {seasonsState[seasonNumber]?.show &&
                        seasonsState[seasonNumber].status === "loading" && (
                          <div className="movie__loading-container">
                            <img
                              src={`/assets/icons/spinner-solid.svg`}
                              alt=""
                              className="movie__loading-spinner"
                            />
                            <p className="movie__loading-text">
                              Episodes are loading...
                            </p>
                          </div>
                        )}
                      {seasonsState[seasonNumber]?.show &&
                        seasonsState[seasonNumber].status === "error" && (
                          <div className="movie__error-container">
                            <img
                              src={`/assets/icons/exclamation-circle-solid.svg`}
                              alt=""
                              className="movie__error-spinner"
                            />
                            <p className="movie__loading-text">
                              Show not found.
                            </p>
                          </div>
                        )}
                      {!seasonsState[seasonNumber]?.show && (
                        <div className="movie__season-footer">
                          <button
                            onClick={() => handleSeasonClick(seasonNumber)}
                          >
                            Show episodes
                          </button>
                        </div>
                      )}
                    </div>
                  );
                })}
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

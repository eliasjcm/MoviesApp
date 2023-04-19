import React, { useEffect } from "react";
import { PersonMovies } from "./PersonMovies";

export const PersonProductionsGroup = ({
  productionState,
  productionStateFilter,
  setProductionStateFilter,
  type = "MOVIE",
}) => {
  useEffect(() => {
    if (productionState.cast.length === 0) {
      setProductionStateFilter("crew");
    }

    if (productionState.crew.length === 0) {
      setProductionStateFilter("cast");
    }
  }, []);

  return (
    <>
      {productionState &&
        (productionState.cast.length > 0 ||
          productionState.crew.length > 0) && (
          <div className="movie__related">
            <div className="movie__related-title">
              <h2 className="movie__related-title__text">
                {type === "MOVIE" ? "Movies" : "TV Shows"}
              </h2>
              {productionState.cast.length > 0 &&
                productionState.crew.length > 0 && (
                  <select
                    name="movies"
                    id="movies"
                    className="movie__related-title__select"
                    value={productionStateFilter}
                    onChange={(e) => setProductionStateFilter(e.target.value)}
                  >
                    <option value="cast">Cast</option>
                    <option value="crew">Crew</option>
                  </select>
                )}
              {productionState.crew.length === 0 && (
                <div className="movie__related-title__type">(Cast)</div>
              )}
              {productionState.cast.length === 0 && (
                <div className="movie__related-title__type">(Crew)</div>
              )}
            </div>
            <div className="movie__related-container">
              {productionStateFilter === "cast" ? (
                <PersonMovies
                  list={productionState.cast.sort(
                    (a, b) => b.popularity - a.popularity
                  )}
                  type={type}
                />
              ) : (
                <PersonMovies
                  list={productionState.crew.sort(
                    (a, b) => b.popularity - a.popularity
                  )}
                  type={type}
                />
              )}
            </div>
          </div>
        )}
    </>
  );
};

import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import { MovieCard } from "../movies/MovieCard";
import { ShowCard } from "../tv-series/ShowCard";

export const PersonMovies = ({ list, type }) => {
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 15;
  const [moviesState, setMoviesState] = useState();

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % list.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  useEffect(() => {
    setMoviesState(list.slice(itemOffset, itemOffset + itemsPerPage));
  }, [itemOffset, list]);

  return (
    <div>
      {moviesState && moviesState.length > 0 && (
        <>
          <div className="person__movies-container">
            {moviesState.map((movie) => (
              <div className="person__movie-card">
                {type === "MOVIE" ? (
                  <MovieCard key={movie.id} {...movie} />
                ) : (
                  <ShowCard key={movie.id} {...movie} />
                )}
                <div className="person__movie-card__character">
                  {movie.character && (
                    <p>
                      as{" "}
                      <span className="character-title">{movie.character}</span>
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
          <ReactPaginate
            breakLabel={"..."}
            nextLabel={"next"}
            onPageChange={handlePageClick}
            pageRangeDisplayed={2}
            pageCount={Math.ceil(list.length / itemsPerPage)}
            previousLabel={"previous"}
            renderOnZeroPageCount={false}
            activeClassName={"active"}
            disabledLinkClassName={"disabled"}
          />
        </>
      )}
    </div>
  );
};

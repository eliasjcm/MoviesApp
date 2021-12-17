import React, { useEffect, useState } from "react";
import { MovieCard } from "./components/movies/MovieCard";
import { MovieList } from "./components/movies/MovieList";
import { ShowList } from "./components/tv-series/ShowList";
import { AppFrame } from "./components/ui/AppFrame";
import { CategoryFrame } from "./components/ui/CategoryFrame";
import { PosterSection } from "./components/ui/PosterSection";
import { movies } from "./data/movies";
import { shows } from "./data/shows";

export const MoviesApp = () => {
  const [movieList, setMovieList] = useState([]);
  const [showList, setShowList] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchWork = async () => {
      const movieReq = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?api_key=83ca2fe5c9ab820ce8ef50911a50c826&page=1"
      );
      setMovieList((await movieReq.json()).results);

      const showReq = await fetch(
        "https://api.themoviedb.org/3/tv/popular?api_key=83ca2fe5c9ab820ce8ef50911a50c826&language=en-US&page=1"
      );
      setShowList((await showReq.json()).results);
      setLoading(false);
    };
    fetchWork();
  }, []);
  console.log("RENDERING");
  console.log(movieList);
  return (
    !loading && (
      <div className="main">
        <PosterSection movieList={movieList} />
        <AppFrame />

        {/* sadsdadsssssssssssssssss
      <CategoryFrame name="Science Fiction" /> */}
        <div className="second-part">
          <span className="section-header movies-header">
            New releases &nbsp;&nbsp;&nbsp; &gt;
          </span>
          <MovieList movieList={movieList}></MovieList>
          <span className="section-header shows-header" id="shows-header">
            Featured TV shows &nbsp;&nbsp;&nbsp; &gt;
          </span>
          <ShowList showList={showList} />
        </div>
      </div>
    )
  );
};

// import { movies } from "./data/movies";
// import { shows } from "./data/shows";

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { MovieScreen } from "./components/movies/MovieScreen";
import { PersonScreen } from "./components/people/PersonScreen";
import { ShowScreen } from "./components/tv-series/ShowScreen";
import { LandingPage } from "./components/ui/LandingPage";
import { SearchPage } from "./components/ui/SearchPage";

export const MoviesApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/movies/:movieId" element={<MovieScreen />} />
        <Route path="/shows/:showId" element={<ShowScreen />} />
        <Route path="/person/:personId" element={<PersonScreen />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};

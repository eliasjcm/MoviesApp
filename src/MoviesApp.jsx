// import { movies } from "./data/movies";
// import { shows } from "./data/shows";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MovieScreen } from "./components/movies/MovieScreen";
import { LandingPage } from "./components/ui/LandingPage";
import { SearchPage } from "./components/ui/SearchPage";

export const MoviesApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/movies/:movieId" element={<MovieScreen />} />
      </Routes>
    </BrowserRouter>
  );
};

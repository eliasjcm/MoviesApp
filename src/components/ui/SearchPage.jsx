import React, { useEffect, useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
import { Waypoint } from "react-waypoint";
import { MovieCard } from "../movies/MovieCard";
import { AppFrame } from "./AppFrame";
// import queryString from "query-string";

export const SearchPage = () => {
  // const navigate = useNavigate();
  // const location = useLocation();

  const [statusState, setStatusState] = useState("");

  const [searchResultsState, setSearchResultsState] = useState([]);
  const [searchInfo, setSearchInfo] = useState({
    text: "",
    type: "movie",
    hasResults: true,
    currentPage: 1,
    hasNextPage: true,
    loading: false,
  });

  // useEffect(() => {
  //   const { q = "", type = "movie" } = queryString.parse(location.search);
  //   console.log(q, type);
  //   console.log(location);
  //   console.log("Holas");
  //   setSearchInfo({ ...searchInfo, type: type, text: "spid" });
  // }, []);

  const loadMoreItems = async () => {
    const movieReq = await fetch(
      `https://api.themoviedb.org/3/search/${searchInfo.type}?api_key=83ca2fe5c9ab820ce8ef50911a50c826&query=${searchInfo.text}&page=${searchInfo.currentPage}`
    );
    const result = (await movieReq.json()).results;
    console.log("newItems", result);
    if (result) {
      setSearchResultsState([...searchResultsState, ...result]);
      setSearchInfo({ ...searchInfo, currentPage: searchInfo.currentPage + 1 });
    } else {
      setSearchInfo({ ...searchInfo, hasNextPage: false });
    }
  };

  const handleSearch = async (e) => {
    console.log("entro con", searchInfo.text, " ", searchInfo.type);
    if (searchInfo.text === "") return;
    setStatusState("loading");
    const movieReq = await fetch(
      `https://api.themoviedb.org/3/search/${searchInfo.type}?api_key=83ca2fe5c9ab820ce8ef50911a50c826&query=${searchInfo.text}&page=1`
    );
    const result = (await movieReq.json()).results;
    console.log("fetched data", result);
    if (result && result.length > 0) {
      setSearchResultsState(result);
      setSearchInfo({ ...searchInfo, hasResults: true, currentPage: 1 });
      setStatusState("loaded");
    } else if (result && result.length === 0) {
      setStatusState("error");
    } else {
      setSearchResultsState([]);
      setSearchInfo({ ...searchInfo, hasResults: false });
    }

    console.log();
    // navigate(`?q=${searchInfo.text}&type=${searchInfo.type}`);
  };

  const handleTypeChange = async (typeName) => {
    setSearchInfo({
      ...searchInfo,
      type: typeName,
    });
    // console.log("Going to fetch", searchInfo.type);
  };

  useEffect(() => {
    const fetchData = async () => {
      // console.log("fetching");
      // console.log(searchInfo);
      await handleSearch();
    };
    fetchData();
  }, [searchInfo.type]);

  return (
    <>
      <AppFrame />

      <div className="search-page">
        <div className="search-container">
          <p className="search-title">Enter your search term</p>
          <div className="search-fields">
            <input
              className="search-input"
              type="text"
              placeholder="Input Text..."
              value={searchInfo.text}
              onChange={(e) =>
                setSearchInfo({
                  ...searchInfo,
                  text: e.target.value,
                })
              }
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSearch(e);
                }
              }}
            />
            <button className="search-btn" onClick={handleSearch}>
              <img
                src={`./assets/icons/Search.svg`}
                alt=""
                className="search-icon"
                style={{ transform: "scale(1.25)" }}
              />
              Search
            </button>
          </div>
          <div className="search-categories">
            <div
              className={
                "search-categories__category " +
                (searchInfo.type === "movie"
                  ? "search-categories__category-active"
                  : "")
              }
              onClick={() => handleTypeChange("movie")}
            >
              <img
                src={`./assets/icons/Movie.svg`}
                alt=""
                style={{ transform: "scale(1.25)" }}
              />
              Movies
            </div>
            <div
              className={
                "search-categories__category " +
                (searchInfo.type === "tv"
                  ? "search-categories__category-active"
                  : "")
              }
              onClick={() => handleTypeChange("tv")}
            >
              <img
                src={`./assets/icons/TV.svg`}
                alt=""
                style={{ transform: "scale(1.25)" }}
              />
              TV Shows
            </div>
            <div
              className={
                "search-categories__category " +
                (searchInfo.type === "people"
                  ? "search-categories__category-active"
                  : "")
              }
              onClick={() => handleTypeChange("people")}
            >
              <img
                src={`./assets/icons/Account.svg`}
                alt=""
                style={{ transform: "scale(1.25)" }}
              />
              People
            </div>
          </div>
        </div>
        {statusState === "loading" && (
          <div className="search__loading-container">
            <img
              src={`/assets/icons/spinner-solid.svg`}
              alt=""
              className="search__loading-spinner"
            />
            <p className="search__loading-text">Search in progress.</p>
          </div>
        )}
        {statusState === "loaded" && (
          <div className="search-results-list">
            {searchResultsState.map((movie, idx) => {
              return (
                movie.poster_path && (
                  <Waypoint
                    key={idx}
                    onEnter={async () => {
                      if (
                        idx === searchResultsState.length - 6 &&
                        searchInfo.hasNextPage
                      ) {
                        console.log("Llego al ultimo");
                        await loadMoreItems();
                      }
                    }}
                  >
                    <MovieCard {...movie} />
                  </Waypoint>
                )
              );
            })}
          </div>
        )}
        {statusState === "error" && (
          <div className="search__error-container">
            <img
              src={`/assets/icons/exclamation-circle-solid.svg`}
              alt=""
              className="search__error-spinner"
            />
            <p className="search__loading-text">Results not found.</p>
          </div>
        )}
      </div>
    </>
  );
};

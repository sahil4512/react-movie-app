import { useEffect, useState } from "react";
import "./App.css";
import MovieCard from "./Components/MovieCard";

const APIURL = "https://www.omdbapi.com/?apikey=a32a6444";

const App = () => {
  const [movies, setMovies] = useState();
  const [searchTerm, setsearchTerm] = useState("");

  const searchMovies = async (title) => {
    const response = await fetch(`${APIURL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies("");
  }, [setMovies]);

  return (
    <div className="app">
      <div className="sidebar">
        <h1 className="side_bar_title">React Movie App</h1>
        <ul>
          <li className="sidebtn">
            <a className="active" href="/">
              Geners
            </a>
          </li>
          <li className="sidebtn">
            <a href="/">Trending</a>
          </li>
          <li className="sidebtn">
            <a href="/">Upcoming</a>
          </li>
          <li className="sidebtn">
            <a href="/">Favorites</a>
          </li>
        </ul>
        <div className="creator_git_tag">
          <ul>
            <li>
              <a
                href="https://github.com/sahil4512"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="searchbar">
        <input
          className="search_bar"
          placeholder="Search Movies"
          value={searchTerm}
          onChange={(e) => {
            setsearchTerm(e.target.value);
          }}
        />
        <button
          className="search__button"
          onClick={(e) => searchMovies(searchTerm)}
        >
          Search&nbsp;&nbsp;
          <i className="fas fa-search"></i>
        </button>
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => {
            return <MovieCard movie={movie} />;
          })}
        </div>
      ) : (
        <div className="error">
          <h2>No Movies Found</h2>
        </div>
      )}
    </div>
  );
};

export default App;

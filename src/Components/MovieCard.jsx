import React from "react";

const MovieCard = ({ movie }) => {
  return (
    <ul key={movie.imdbID} className="movie">
      <li className="movie-card">
        <div className="image-wrapper">
          <img
            className="movie-img"
            src={
              movie.Poster !== "N/A"
                ? movie.Poster
                : "https://via.placeholder.com/400"
            }
            alt={movie.Title}
          />
          <span className="movie-type">{movie.Type}</span>
        </div>
        <h3 className="title ">{movie.Title}</h3>
      </li>
    </ul>
  );
};

export default MovieCard;

import React from "react";
import "../css/Moviecard.css";
import { useMovieContext } from "../contexts/MovieContext";

export function Moviecard({ movie }) {
  const { fav, addfav, removefav, isfav } = useMovieContext();

  const favourite = isfav(movie.id);

  const onfavorite = (e) => {
    e.preventDefault();
    if (favourite) removefav(movie.id);
    else addfav(movie);
    alert( favourite ? `Unliked ${movie.title}`: `Liked ${movie.title}`);
  };

  return (
    <div className="card">
      <div className="poster">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
       <button className={`favorite-btn ${favourite ? "active" : ""}`} onClick={onfavorite}>
                    ♥
                </button>
      </div>
      <div className="info">
        <h2>{movie.title}</h2>
        <h3>{movie.release_date}</h3>
      </div>
    </div>
  );
}

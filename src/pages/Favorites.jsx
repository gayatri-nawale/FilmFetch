import React from 'react';
import "../css/Favorites.css";
import { useMovieContext } from '../contexts/MovieContext';
import { Moviecard } from '../components/moviecard.jsx';

export function Favorites() {
  const { fav } = useMovieContext();

  return (
    <div>
      <h1 className="text-xl font-bold m-4">My Favourite Movies</h1>
      {fav.length === 0 ? (
        <p>No favourites yet</p>
      ) : (
        <div className="list">
          {fav.map((movie) => (
            <Moviecard movie={movie} key={movie.id} />
          ))}
        </div>
      )}
    </div>
  );
}

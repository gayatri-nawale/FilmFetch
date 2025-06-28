import React from "react";
import { Moviecard } from "../components/moviecard.jsx";
import { useState, useEffect } from "react";
import { getPopularMovies, searchMovies } from "../servies/apikey";
import "../css/Home.css";
export function Home() {
  const [state, setState] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [isloading, setLoading] = useState(true);

  useEffect(() => {
    const mvs = async () => {
      try {
        const popmovies = await getPopularMovies();
        setMovies(popmovies);
      } catch (err) {
        console.log(err);
        setError("failed to load movies ");
      } finally {
        setLoading(false);
      }
    };
    mvs();
  }, []);

  const handlesubmit = async (e) => {
    e.preventDefault();
    if (!state.trim()) return;
    if (isloading) return;
    try {
  const searchMvs = await searchMovies(state); // pass state
setMovies(searchMvs);
      setError(null)
    } catch (e) {
      console.log(e);
      setError("failed to search movie...");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handlesubmit}>
        <input
          type="search"
          className="border-slate-950 border-2 rounded-md"
          value={state}
          onChange={(e) => setState(e.target.value)}
        />
        <button
          type="submit"
          className="bg-gray-950 text-slate-200 px-1 py-1 m-4 rounded-md"
        >
          Search
        </button>
      </form>
      {error && <p>{error}</p>}

      {isloading ? (
        <p>Movies are currently loading </p>
      ) : (
        <div className="list">
          {movies.map(
            (m) =>
              m.title.toLowerCase().startsWith(state) && (
                <Moviecard movie={m} key={m.id} />
              )
          )}
        </div>
      )}
    </div>
  );
}

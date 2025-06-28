import { useState, useEffect, useContext, createContext } from "react";

const MovieContext = createContext();

export const useMovieContext = () => useContext(MovieContext); // ✅ custom hook

export const MovieProvider = ({ children }) => {
  const [fav, setFav] = useState([]);

  useEffect(() => {
    const storfav = localStorage.getItem("fav");
    if (storfav) {
      setFav(JSON.parse(storfav));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("fav", JSON.stringify(fav));
  }, [fav]);

  const addfav = (m) => setFav((prev) => [...prev, m]);
  const removefav = (id) => setFav((prev) => prev.filter((movie) => movie.id !== id));
  const isfav = (id) => fav.some((movie) => movie.id === id);

  return (
    <MovieContext.Provider value={{ fav, addfav, removefav, isfav }}>
      {children}
    </MovieContext.Provider>
  );
};

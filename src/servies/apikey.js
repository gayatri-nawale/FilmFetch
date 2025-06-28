const apikey = "fed78a4a9acb0ba6171045399e9ac418";
const baseurl = "https://api.themoviedb.org/3";


export const getPopularMovies = () => {
  return fetch(`${baseurl}/movie/popular?api_key=${apikey}`)
    .then((response) => response.json())
    .then((data) => data.results);
};

export const searchMovies = (query) => {
  return fetch(
    `${baseurl}/search/movie?api_key=${apikey}&query=${encodeURIComponent(
      query
    )}`
  )
    .then((response) => response.json())
    .then((data) => data.results);
};

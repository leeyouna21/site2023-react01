import React, { useState, useEffect } from "react";
import Contents from "../layout/Contents";
import ContTitle from "../layout/ContTitle";
import MovieSlider from "../Movie/MovieSlider";
import MovieTag from "../Movie/MovieTag";
import MovieCont from "../Movie/MovieCont";

const MoviePage = () => {
  const [movies, setMovies] = useState([]);

  const search = async (query) => {
    await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=8a77f2456dc64547cf05c6088a615319&query=${query}`
    )
      .then((response) => response.json())
      .then((result) => setMovies(result.results))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=8a77f2456dc64547cf05c6088a615319"
    )
      .then((response) => response.json())
      .then((result) => setMovies(result.results))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <Contents>
        <ContTitle title="🎥 movie 🎥" />
        <MovieSlider movies={movies} />
        <MovieTag />
        <MovieCont movies={movies} />
      </Contents>
    </>
  );
};

export default MoviePage;

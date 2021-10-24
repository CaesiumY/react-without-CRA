import "./index.css";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Movies = () => {
  const allMovies = useSelector((state) => state.movie.all);

  return (
    <div className="movies">
      <div className="list">
        {allMovies.map((movie, index) => (
          <Link key={index} to={`/movies/${index}`}>
            <div
              className="movie-link"
              style={{ backgroundImage: `url(${movie.cover})` }}
            ></div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Movies;

import "./index.css";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Movies = ({ params, children }) => {
  const allMovies = useSelector((state) => state.movie.all);

  return (
    <div className="movies">
      <div className={params?.id ? "listHidden" : "list"}>
        {allMovies.map((movie, index) => (
          <Link key={index} to={`/movies/${index + 1}`}>
            <div
              className="movie"
              style={{ backgroundImage: `url(${movie.cover})` }}
            ></div>
          </Link>
        ))}
      </div>
      {children}
    </div>
  );
};

export default Movies;

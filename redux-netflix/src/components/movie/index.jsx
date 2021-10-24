import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { fetchMovie } from "../../reducer/movieSlice";
import "./index.css";

const Movie = () => {
  const { id } = useParams();
  const movie = useSelector((state) => state.movie.current);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovie(id));
  }, [id]);

  return (
    <div
      className="movie"
      style={{
        backgroundImage: `linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.625) 100%), url(${movie.cover})`,
      }}
    >
      <div
        className="cover"
        style={{
          backgroundImage: `url(${movie.cover})`,
        }}
      ></div>

      <div className="description">
        <div className="title">{movie.title}</div>
        <div className="year">{movie.year}</div>
        <div className="starring">
          {movie.starring?.map((actor, index) => (
            <div key={index} className="actor">
              {actor.name}
            </div>
          ))}
        </div>
      </div>

      <Link className="closeButton" to="/movies">
        🎞
      </Link>
    </div>
  );
};

export default Movie;

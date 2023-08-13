"use client";

import { FC, useEffect, useState } from "react";
import "./PopularMovies.scss";
import MovieSmall, { MovieSmallProps } from "../Movie/MovieSmall/MovieSmall";
import Button from "../UI/Button/Button";
import { API_URL } from "@/configs/api.config";
import { IMovie } from "@/types";
import MovieService from "@/services/movie/movie.service";
import Loader from "../UI/Loader/Loader";

const PopularMovies: FC = () => {
  const [popularMovies, setPopularMovies] = useState<IMovie[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const movieService = new MovieService();
      const movies: IMovie[] = await movieService.getAll();

      setPopularMovies(movies);
    };

    fetchData();
  }, []);

  if (popularMovies === null) {
    return <Loader />;
  }

  return (
    <div className="menu__item">
      <h4 className="menu__item-title">Popular Movies</h4>
      <ul className="menu__list">
        {popularMovies.map((movie) => (
          <MovieSmall key={movie._id} {...movie} />
        ))}
      </ul>
      <Button className="menu__button">See more</Button>
    </div>
  );
};

export default PopularMovies;

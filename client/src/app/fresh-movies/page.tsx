"use client";

import { FC, useEffect, useState } from "react";
import MovieMedium from "@/components/Movie/MovieMedium/MovieMedium";
import MovieService from "@/services/movie/movie.service";
import { IMovie } from "@/types";
import Loader from "@/components/UI/Loader/Loader";

const FreshMoviesPage: FC = () => {
  const [freshMovies, setFreshMovies] = useState<IMovie[] | null>(null);

  useEffect(() => {
    const fetchMovies = async () => {
      const movieService = new MovieService();
      const movies = (await movieService.getAll())
        .sort(
          (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        )
        .slice(0, 12);
      setFreshMovies(movies);
    };

    fetchMovies();
  }, []);

  return (
    <section className="fresh-movies-page list-page">
      <div className="container">
        <h1 className="title list-page__title">Fresh Movies</h1>
        <p className="subtitle list-page__subtitle">
          New movies and series in excellent quality: legal, safe, without ads
        </p>
        <div className="list-page__movies">
          {freshMovies === null ? (
            <Loader />
          ) : (
            freshMovies.map((movie) => {
              const url = `movies/${movie.slug}`;
              return (
                <MovieMedium
                  key={movie._id}
                  id={movie._id}
                  title={movie.title}
                  url={url}
                  image={movie.imageMedium}
                />
              );
            })
          )}
        </div>
      </div>
    </section>
  );
};

export default FreshMoviesPage;

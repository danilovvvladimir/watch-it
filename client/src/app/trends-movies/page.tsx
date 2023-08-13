"use client";

import { FC, useEffect, useState } from "react";
import MovieMedium from "@/components/Movie/MovieMedium/MovieMedium";
import { TrendingMoviesItems } from "@/constants/constants";
import MovieService from "@/services/movie/movie.service";
import { IMovie } from "@/types";
import Loader from "@/components/UI/Loader/Loader";

const TrendsMoviesPage: FC = () => {
  const [trendingMovies, setTrendingMovies] = useState<IMovie[] | null>(null);

  useEffect(() => {
    const fetchMovies = async () => {
      const movieService = new MovieService();
      const movies = (await movieService.getAll())
        .sort((a, b) => a.rating - b.rating)
        .slice(0, 12);
      setTrendingMovies(movies);
    };

    fetchMovies();
  }, []);

  return (
    <section className="fresh-movies-page list-page">
      <div className="container">
        <h1 className="title list-page__title">Trends</h1>
        <p className="subtitle list-page__subtitle">
          Trending movies and series in excellent quality: legal, safe, without
          ads
        </p>

        <div className="list-page__movies">
          {trendingMovies === null ? (
            <Loader />
          ) : (
            trendingMovies.map((movie) => {
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

export default TrendsMoviesPage;

// ==> Libs imports <===
import { FC } from "react";
// ==> Components imports <===

// ==> Other imports <===
import "./TrendsMoviesPage.scss";
import { IMovieMedium } from "@/types/types";
import MovieMedium from "@/components/Movie/MovieMedium/MovieMedium";
import { TrendingMoviesItems } from "@/constants/constants";

const TrendsMoviesPage: FC = () => {
  const movies = TrendingMoviesItems;
  return (
    <section className="fresh-movies-page">
      <div className="container">
        <h1 className="title fresh-movies-page__title">Trends</h1>
        <p className="subtitle fresh-movies-page__subtitle">
          Trending movies and series in excellent quality: legal, safe, without
          ads
        </p>

        <div className="fresh-movies-page__movies">
          {movies.map((movie) => (
            <MovieMedium
              key={movie.id}
              id={movie.id}
              title={movie.title}
              url={movie.url}
              image={movie.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendsMoviesPage;

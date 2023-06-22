// ==> Libs imports <===
import { FC } from "react";
// ==> Components imports <===

// ==> Other imports <===
import "./FreshMoviesPage.scss";
import { IMovieMedium } from "@/types/types";
import MovieMedium from "@/components/Movie/MovieMedium/MovieMedium";
import { FreshMoviesItems } from "@/constants/constants";

const FreshMoviesPage: FC = () => {
  const movies = FreshMoviesItems;
  return (
    <section className="fresh-movies-page">
      <div className="container">
        <h1 className="title fresh-movies-page__title">Fresh Movies</h1>
        <p className="subtitle fresh-movies-page__subtitle">
          New movies and series in excellent quality: legal, safe, without ads
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

export default FreshMoviesPage;

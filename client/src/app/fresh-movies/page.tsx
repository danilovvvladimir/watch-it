import { FC } from "react";
import MovieMedium from "@/components/Movie/MovieMedium/MovieMedium";
import { FreshMoviesItems } from "@/constants/constants";

const FreshMoviesPage: FC = () => {
  const movies = FreshMoviesItems;
  return (
    <section className="fresh-movies-page list-page">
      <div className="container">
        <h1 className="title list-page__title">Fresh Movies</h1>
        <p className="subtitle list-page__subtitle">
          New movies and series in excellent quality: legal, safe, without ads
        </p>
        <div className="list-page__movies">
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

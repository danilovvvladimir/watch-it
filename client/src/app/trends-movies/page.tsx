import { FC } from "react";
import MovieMedium from "@/components/Movie/MovieMedium/MovieMedium";
import { TrendingMoviesItems } from "@/constants/constants";

const TrendsMoviesPage: FC = () => {
  const movies = TrendingMoviesItems;
  return (
    <section className="fresh-movies-page list-page">
      <div className="container">
        <h1 className="title list-page__title">Trends</h1>
        <p className="subtitle list-page__subtitle">
          Trending movies and series in excellent quality: legal, safe, without
          ads
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

export default TrendsMoviesPage;

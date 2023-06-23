// ==> Libs imports <===
import { FC } from "react";
// ==> Components imports <===

// ==> Other imports <===
import MovieMedium from "@/components/Movie/MovieMedium/MovieMedium";
import { GenresCollectionItems } from "@/constants/constants";

const GenresPage: FC = () => {
  const genresCollection = GenresCollectionItems;
  return (
    <section className="list-page genres-page">
      <div className="container">
        <h1 className="title list-page__title">Genres</h1>
        <p className="subtitle list-page__subtitle">
          In this section you will find all genres on our site
        </p>
        <div className="list-page__movies">
          {genresCollection.map((genreItem) => (
            <MovieMedium
              key={genreItem.movies[0].id}
              id={genreItem.movies[0].id}
              title={genreItem.genreTitle}
              image={genreItem.movies[0].image}
              url={genreItem.url}
              isCollection={true}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GenresPage;

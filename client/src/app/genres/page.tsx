import { FC } from "react";
import MovieMedium from "@/components/Movie/MovieMedium/MovieMedium";
import { ICollection } from "@/types/helpers.types";

const getGenresCollection = async () => {
  const response = await fetch("http://localhost:4444/api/genres/collections");

  return response.json();
};

const GenresPage: FC = async () => {
  const genresCollection: ICollection[] = await getGenresCollection();

  return (
    <section className="list-page genres-page">
      <div className="container">
        <h1 className="title list-page__title">Genres</h1>
        <p className="subtitle list-page__subtitle">
          In this section you will find all genres on our site
        </p>
        <div className="list-page__movies">
          {genresCollection.map((genre) => {
            const genreUrl = `genres/${genre.slug}`;
            return (
              <MovieMedium
                key={genre._id}
                id={genre._id}
                title={genre.name}
                image={genre.imageMedium}
                url={genreUrl}
                isCollection={true}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default GenresPage;

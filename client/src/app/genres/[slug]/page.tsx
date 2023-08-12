// ==> Libs imports <===
import { FC } from "react";
// ==> Components imports <===

// ==> Other imports <===
import "./SingleGenrePage.scss";
import { notFound, useSearchParams } from "next/navigation";
import { cartoonsMovies, horrorMovies } from "@/constants/constants";
import MovieMedium from "@/components/Movie/MovieMedium/MovieMedium";
import { MovieService } from "@/services/movie.service";
import { IGenre, IMovie } from "@/types/movies.types";
import capitalizeString from "@/utils/capitalizeString";
import GenreService from "@/services/genre/genre.service";

interface SingleGenrePageProps {
  params: {
    slug: string;
  };
}

export const generateMetadata = async ({
  params: { slug },
}: SingleGenrePageProps) => {
  return {
    title: `Genres | ${capitalizeString(slug)}`,
  };
};

const SingleGenrePage: FC<SingleGenrePageProps> = async ({
  params: { slug },
}) => {
  let genreMovies: IMovie[];
  const genreService = new GenreService();

  try {
    const responseGenre = await genreService.getGenreIdBySlug(slug);
    const genreId = responseGenre.data._id;
    if (!genreId) {
      notFound();
    }

    const response = await MovieService.getMoviesByGenre(genreId);
    genreMovies = response.data;
  } catch (error) {
    notFound();
  }

  return (
    <section className="genre-page list-page">
      <div className="container">
        <h1 className="title list-page__title">
          Genres / {capitalizeString(slug)}
        </h1>
        <p className="subtitle list-page__subtitle">
          New movies and series in excellent quality: legal, safe, without ads
        </p>
        <div className="list-page__movies">
          {genreMovies.map((movie) => (
            <MovieMedium
              key={movie._id}
              id={movie._id}
              title={movie.title}
              url={`/movies/${movie.slug}`}
              image={movie.imageMedium}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SingleGenrePage;

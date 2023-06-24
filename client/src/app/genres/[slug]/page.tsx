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
import { GenreService } from "@/services/genre.service";

interface SingleGenrePageProps {
  params: {
    slug: string;
  };
}

const capitilizeString = (str: string): string | null => {
  const trimmedString = str.trim();
  if (trimmedString.trim() === "") {
    return null;
  }
  const firstLetter = trimmedString.charAt(0).toUpperCase();
  const editedSlug = firstLetter + trimmedString.toLowerCase().substring(1);
  return editedSlug;
};

export const generateMetadata = async ({
  params: { slug },
}: SingleGenrePageProps) => {
  return {
    title: `Genres | ${capitilizeString(slug)}`,
  };
};

const SingleGenrePage: FC<SingleGenrePageProps> = async ({
  params: { slug },
}) => {
  console.log(slug);
  let genreMovies: IMovie[];
  try {
    const responseGenre = await GenreService.getGenreIdBySlug(slug);
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
          Genres / {capitilizeString(slug)}
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
              url={movie.slug}
              image={movie.bigPoster}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SingleGenrePage;

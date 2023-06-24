// ==> Libs imports <===
import { FC } from "react";
// ==> Components imports <===

// ==> Other imports <===
import "./SingleMoviePage.scss";
import Image from "next/image";
import capitalizeString from "@/utils/capitalizeString";
import { notFound } from "next/navigation";
import { MovieService } from "@/services/movie.service";
import { IMovie } from "@/types/movies.types";
import Link from "next/link";

interface SingleMoviePageProps {
  params: {
    slug: string;
  };
}

export const generateMetadata = async ({
  params: { slug },
}: SingleMoviePageProps) => {
  let movie: IMovie;
  try {
    const { data } = await MovieService.getMoviesBySlug(slug);
    movie = data;
  } catch (error) {
    notFound();
  }
  return {
    title: `Movies | ${movie.title}`,
  };
};

const SingleMoviePage: FC<SingleMoviePageProps> = async ({
  params: { slug },
}) => {
  let movie: IMovie;
  try {
    const { data } = await MovieService.getMoviesBySlug(slug);
    movie = data;
  } catch (error) {
    notFound();
  }

  return (
    <section className="single-movie-page">
      <div className="container">
        <div className="single-movie-page__header">
          <Image
            className="single-movie-page__header-image"
            alt={movie.title}
            src={movie.imageSpinner}
            width={1200}
            height={288}
          />
          <div className="single-movie-page__header-surface"></div>
          <div className="single-movie-page__header-textbox">
            <h1 className="title single-movie-page__title">{movie.title}</h1>
            <div className="single-movie-page__info">
              <div className="single-movie-page__year single-movie-page__info-item">
                {movie.parameters.year}
              </div>
              <div className="single-movie-page__countries single-movie-page__info-item">
                {movie.parameters.countries.map((country, index) =>
                  index !== movie.parameters.countries.length - 1
                    ? `${country}, `
                    : country
                )}
              </div>
              <div className="single-movie-page__duration single-movie-page__info-item">
                {movie.parameters.duration} min
              </div>
            </div>
            <div className="single-movie-page__genres ">
              Genres:
              <ul className="single-movie-page__genres-list">
                {movie.genres.map((genre, index) => (
                  <li key={genre._id} className="single-movie-page__genre-item">
                    <Link
                      href={`/genres/${genre.slug}`}
                      className="single-movie-page__genre-link"
                    >
                      {index === movie.genres.length - 1
                        ? genre.name
                        : `${genre.name}, `}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="single-movie-page__actors">
              Actors:
              <ul className="single-movie-page__actors-list">
                {movie.actors.map((actor, index) => (
                  <li
                    key={actor._id}
                    className="single-movie-page__actors-item"
                  >
                    <Link
                      href={`/actors/${actor.slug}`}
                      className="single-movie-page__actors-link"
                    >
                      {index === movie.actors.length - 1
                        ? actor.name
                        : `${actor.name}, `}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="single-movie-page__content">
          <div className="single-movie-page__video"></div>
          <div className="single-movie-page__rating"></div>
        </div>
      </div>
    </section>
  );
};

export default SingleMoviePage;

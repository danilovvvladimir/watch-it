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
import Button from "@/components/UI/Button/Button";
import CardList from "@/components/CardList/CardList";
import { GenreService } from "@/services/genre/genre.service";
import { ICard, ICards } from "@/types/types";
import { transformMovieToCard } from "@/utils/transformToCard";

interface SingleMoviePageProps {
  params: {
    slug: string;
  };
  isAuth: boolean;
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
  isAuth,
}) => {
  let movie: IMovie;
  let finalSimilarMoviesCards: ICards;
  try {
    const { data } = await MovieService.getMoviesBySlug(slug);
    movie = data;

    const { data: similarMovies } = await MovieService.getMoviesByGenre(
      movie.genres[0]._id
    );

    const similarMoviesCards = similarMovies
      .filter((similarMovie) => similarMovie._id !== movie._id)
      .map((similarMovie) => transformMovieToCard(similarMovie));
    finalSimilarMoviesCards = {
      title: "Similar Movies",
      href: `/genres/${movie.genres[0].slug}`,
      cards: similarMoviesCards,
    };
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
          <div className="single-movie-page__video">
            {isAuth ? (
              <div className="single-movie-page__video--auth"></div>
            ) : (
              <div className="single-movie-page__video--notauth">
                <div className="single-movie-page__video-message">
                  You must be logged in to start watching
                </div>
                <Link
                  href="/auth/login"
                  className="button  single-movie-page__video-link"
                >
                  Sign In
                </Link>
              </div>
            )}
          </div>
          <div className="single-movie-page__rating">
            {isAuth ? (
              <div className="single-movie-page__rating--auth"></div>
            ) : (
              <div className="single-movie-page__rating--notauth">
                <div className="single-movie-page__rating-message">
                  Do you like the movie?
                </div>
                <span className="single-movie-page__rating-description">
                  Share your opinion on it.
                </span>
                <Link href="/auth/login" className="button">
                  Sign In
                </Link>
              </div>
            )}
          </div>
        </div>
        <CardList cards={finalSimilarMoviesCards} />
      </div>
    </section>
  );
};

export default SingleMoviePage;

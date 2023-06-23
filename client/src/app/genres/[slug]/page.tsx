// ==> Libs imports <===
import { FC } from "react";
// ==> Components imports <===

// ==> Other imports <===
import "./SingleGenrePage.scss";
import { notFound, useSearchParams } from "next/navigation";
import { cartoonsMovies, horrorMovies } from "@/constants/constants";
import MovieMedium from "@/components/Movie/MovieMedium/MovieMedium";

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

const SingleGenrePage: FC<SingleGenrePageProps> = ({ params: { slug } }) => {
  let genreMovies;
  switch (slug) {
    case "horror": {
      genreMovies = horrorMovies;
      break;
    }
    case "cartoons": {
      genreMovies = cartoonsMovies;
      break;
    }
    default:
      notFound();
      break;
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

export default SingleGenrePage;

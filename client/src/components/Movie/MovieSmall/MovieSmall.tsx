// ==> Libs imports <===
import { FC } from "react";
// ==> Components imports <===

// ==> Other imports <===
import "./MovieSmall.scss";
import Image from "next/image";
import Link from "next/link";
import { IMovieSmall } from "@/types/types";
import { IMovie } from "@/types/movies.types";

export interface MovieSmallProps extends IMovie {}

const MovieSmall: FC<MovieSmallProps> = ({
  poster,
  genres,
  rating,
  slug,
  title,
}) => {
  return (
    <li className="popular-movies__movie movie-small">
      <Link href={`/movies/${slug}`} className="movie-small__wrapper-link">
        <Image
          src={poster}
          width={50}
          height={50}
          alt={title}
          className="movie-small__image"
        />
        <div className="movie-small__textbox">
          <h4 className="movie-small__title">{title}</h4>
          <div className="movie-small__genres">
            {genres.map((genre, index) => (
              <div key={genre._id} className="movie-small__genres-item">
                {genre.name}
                {index !== genres.length - 1 && ", "}
              </div>
            ))}
          </div>

          <div className="movie-small__rating">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon--gold"
            >
              <path
                d="M21.2836 8.27578L15.3328 7.41093L12.6726 2.01797C12.6 1.87031 12.4805 1.75078 12.3328 1.67812C11.9625 1.49531 11.5125 1.64765 11.3273 2.01797L8.66717 7.41093L2.71639 8.27578C2.55233 8.29922 2.40233 8.37656 2.28748 8.49375C2.14864 8.63645 2.07214 8.82843 2.07477 9.02752C2.07741 9.2266 2.15897 9.41649 2.30155 9.55547L6.60701 13.7531L5.58983 19.6805C5.56597 19.8183 5.58123 19.9602 5.63387 20.0898C5.68651 20.2195 5.77442 20.3318 5.88764 20.414C6.00086 20.4962 6.13486 20.5451 6.27444 20.555C6.41401 20.565 6.55358 20.5356 6.67733 20.4703L12 17.6719L17.3226 20.4703C17.468 20.5477 17.6367 20.5734 17.7984 20.5453C18.2062 20.475 18.4805 20.0883 18.4101 19.6805L17.393 13.7531L21.6984 9.55547C21.8156 9.44062 21.893 9.29062 21.9164 9.12656C21.9797 8.7164 21.6937 8.33672 21.2836 8.27578Z"
                fill="black"
              />
            </svg>
            {rating}
          </div>
        </div>
      </Link>
    </li>
  );
};

export default MovieSmall;

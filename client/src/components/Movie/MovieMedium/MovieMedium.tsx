// ==> Libs imports <===
import { FC } from "react";
import Link from "next/link";
import Image from "next/image";

// ==> Components imports <===

// ==> Other imports <===
import "./MovieMedium.scss";
import { IMovieMedium } from "@/types/helpers.types";

interface MovieMediumProps extends IMovieMedium {
  isCollection?: boolean;
}

const MovieMedium: FC<MovieMediumProps> = ({
  image,
  title,
  url,
  isCollection,
}) => {
  return (
    <div className="movie-medium">
      <Link href={url} className="movie-medium__link">
        {isCollection ? (
          <div>
            <Image
              src={image}
              alt={title}
              className="movie-medium__image"
              width={375}
              height={175}
            />
            <Image
              src={image}
              alt={title}
              className="movie-medium__image movie-medium__image--second"
              width={375}
              height={175}
            />
            <Image
              src={image}
              alt={title}
              className="movie-medium__image movie-medium__image--third"
              width={375}
              height={175}
            />
          </div>
        ) : (
          <Image
            src={image}
            alt={title}
            className="movie-medium__image"
            width={375}
            height={175}
          />
        )}
        <div className="movie-medium__surface">
          <div className="movie-medium__surface-title">{title}</div>
        </div>
      </Link>
    </div>
  );
};

export default MovieMedium;

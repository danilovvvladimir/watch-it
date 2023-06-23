// ==> Libs imports <===
import { FC } from "react";
import Link from "next/link";
import Image from "next/image";

// ==> Components imports <===

// ==> Other imports <===
import "./MovieMedium.scss";
import { IMovieMedium } from "@/types/types";

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
            <Image src={image} alt={title} className="movie-medium__image" />
            <Image
              src={image}
              alt={title}
              className="movie-medium__image movie-medium__image--second"
            />
            <Image
              src={image}
              alt={title}
              className="movie-medium__image movie-medium__image--third"
            />
          </div>
        ) : (
          <Image src={image} alt={title} className="movie-medium__image" />
        )}
        <div className="movie-medium__surface">
          <div className="movie-medium__surface-title">{title}</div>
        </div>
      </Link>
    </div>
  );
};

export default MovieMedium;

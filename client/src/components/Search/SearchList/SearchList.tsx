import { FC } from "react";
import "./SearchList.scss";
import Link from "next/link";
import MovieSmall from "@/components/Movie/MovieSmall/MovieSmall";
import Image from "next/image";
import { IMovie } from "@/types";

interface SearchListProps {
  movies: IMovie[];
}

const SearchList: FC<SearchListProps> = ({ movies }) => {
  return (
    <div className="search-list">
      {movies.length ? (
        movies.map((movie) => (
          <Link
            key={movie._id}
            href={`/movies/${movie.slug}`}
            className="search-list__item"
          >
            <Image
              src={movie.imageNormal}
              alt={movie.title}
              height={50}
              width={50}
              className="search-list__image"
            />
            <span className="search-list__title">{movie.title}</span>
          </Link>
        ))
      ) : (
        <div className="search-list__item">Movies not found</div>
      )}
    </div>
  );
};

export default SearchList;

// ==> Libs imports <===
import { FC } from "react";
// ==> Components imports <===

// ==> Other imports <===
import "./SearchList.scss";
import { IMovie } from "@/types/movies.types";
import Link from "next/link";
import MovieSmall from "@/components/Movie/MovieSmall/MovieSmall";
import Image from "next/image";

interface SearchListProps {
  movies: IMovie[];
}

const SearchList: FC<SearchListProps> = ({ movies }) => {
  return (
    <div>
      {movies.length ? (
        movies.map((movie) => (
          <Link key={movie._id} href={`/movies/${movie.slug}`}>
            <Image src={movie.poster} alt={movie.title} />
            <span>{movie.title}</span>
          </Link>
        ))
      ) : (
        <div>Movies not found</div>
      )}
    </div>
  );
};

export default SearchList;
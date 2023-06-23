// ==> Libs imports <===
import { FC } from "react";
// ==> Components imports <===

// ==> Other imports <===
import "./PopularMovies.scss";
import MovieSmall, { MovieSmallProps } from "../Movie/MovieSmall/MovieSmall";
import Button from "../UI/Button/Button";
import { API_URL } from "@/configs/api.config";
import { IMovie } from "@/types/movies.types";

const getMovies = async () => {
  const response = await fetch(API_URL + "/movies", {
    next: { revalidate: 60 },
  });

  return response.json();
};

const PopularMovies: FC = async () => {
  const items: IMovie[] = await getMovies();
  console.log(items);

  return (
    <div className="menu__item">
      <h4 className="menu__item-title">Popular Movies</h4>
      <ul className="menu__list">
        {items.map((item) => (
          <MovieSmall key={item._id} {...item} />
        ))}
      </ul>
      <Button className="menu__button">See more</Button>
    </div>
  );
};

export default PopularMovies;

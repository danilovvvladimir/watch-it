// ==> Libs imports <===
import { FC } from "react";
// ==> Components imports <===

// ==> Other imports <===
import "./PopularMovies.scss";
import MovieSmall, { MovieSmallProps } from "../Movie/MovieSmall/MovieSmall";
import Button from "../UI/Button/Button";

interface PopularMoviesProps {
  items: MovieSmallProps[];
}

const PopularMovies: FC<PopularMoviesProps> = ({ items }) => {
  return (
    <div className="menu__item">
      <h4 className="menu__item-title">Popular Movies</h4>
      <ul className="menu__list">
        {items.map((item) => (
          <MovieSmall
            id={item.id}
            key={item.id}
            title={item.title}
            url={item.url}
            image={item.image}
            rating={item.rating}
            genres={item.genres}
          />
        ))}
      </ul>
      <Button className="menu__button">See more</Button>
    </div>
  );
};

export default PopularMovies;

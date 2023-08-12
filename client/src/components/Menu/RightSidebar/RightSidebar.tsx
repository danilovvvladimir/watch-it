import { FC } from "react";
import PopularMovies from "../../PopularMovies/PopularMovies";
import "./RightSidebar.scss";
import Search from "../../Search/Search";

const RightSidebar: FC = () => {
  return (
    <aside className="container-mini sidebar sidebar--right">
      <Search />
      <PopularMovies />
    </aside>
  );
};

export default RightSidebar;

// ==> Libs imports <===
import { FC } from "react";

// ==> Components imports <===
import PopularMovies from "../../PopularMovies/PopularMovies";

// ==> Other imports <===
import "./RightSidebar.scss";
import Input from "../../UI/Input/Input";
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

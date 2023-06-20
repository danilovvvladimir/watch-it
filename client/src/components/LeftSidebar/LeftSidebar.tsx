// ==> Libs imports <===
import { FC } from "react";

// ==> Components imports <===

// ==> Other imports <===
import "./LeftSidebar.scss";
import MenuList from "../MenuList/MenuList";
import {
  GeneralListItems,
  GenresListItems,
  NavigationListItems,
} from "@/constants/constants";
import Logo from "../Logo/Logo";

const LeftSidebar: FC = () => {
  return (
    <aside className="container-mini sidebar sidebar--left">
      <Logo className="sidebar__logo" />
      <nav className="menu">
        <MenuList items={NavigationListItems} title="Menu" />
        <MenuList items={GenresListItems} title="Popular Genres" />
        <MenuList items={GeneralListItems} title="General" />
      </nav>
    </aside>
  );
};

export default LeftSidebar;

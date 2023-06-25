// ==> Libs imports <===
import { FC } from "react";

// ==> Components imports <===
import MenuList from "../MenuList/MenuList";
import Logo from "../Logo/Logo";

// ==> Other imports <===
import "./LeftSidebar.scss";
import {
  GeneralAdminListItems,
  GeneralAuthListItems,
  GeneralListItems,
  GenresListItems,
  NavigationListItems,
} from "@/constants/constants";
import { API_URL } from "@/configs/api.config";
import { IGenre } from "@/types/movies.types";
import GenresMenuList from "../MenuList/GenresMenuList/GenresMenuList";

const LeftSidebar: FC = () => {
  const isAuth = false;
  const isAdmin = true;

  const generalList = isAuth
    ? isAdmin
      ? GeneralAdminListItems
      : GeneralAuthListItems
    : GeneralListItems;

  return (
    <aside className="container-mini sidebar sidebar--left">
      <Logo className="sidebar__logo" />
      <nav className="menu">
        <MenuList items={NavigationListItems} title="Menu" />
        <GenresMenuList />
        <MenuList items={generalList} title="General" />
      </nav>
    </aside>
  );
};

export default LeftSidebar;

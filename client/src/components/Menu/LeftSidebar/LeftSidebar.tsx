"use client";

import { FC } from "react";
import MenuList from "../../MenuList/MenuList";
import Logo from "../../Logo/Logo";
import "./LeftSidebar.scss";
import {
  GeneralAdminListItems,
  GeneralAuthListItems,
  GeneralListItems,
  GenresListItems,
  NavigationListItems,
} from "@/constants/constants";

import GenresMenuList from "../../MenuList/GenresMenuList/GenresMenuList";
import { checkIsAuth } from "@/store/user/user.slice";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { LoadingStatus } from "@/store/user/user.interface";

const LeftSidebar: FC = () => {
  // const { isLoading, user } = useSelector((state: RootState) => state.user);
  // const isAuth = useSelector(checkIsAuth);
  const isAdmin = true;

  // const generalList = isAuth
  //   ? isAdmin
  //     ? GeneralAdminListItems
  //     : GeneralAuthListItems
  //   : GeneralListItems;

  return (
    <aside className="container-mini sidebar sidebar--left">
      <Logo className="sidebar__logo" />
      <nav className="menu">
        <MenuList items={NavigationListItems} title="Menu" />
        <GenresMenuList />
        <MenuList items={GeneralListItems} title="General" />
      </nav>
    </aside>
  );
};

export default LeftSidebar;

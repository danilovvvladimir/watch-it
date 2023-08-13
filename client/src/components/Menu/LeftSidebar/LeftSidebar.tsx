"use client";

import { FC, useState, useEffect } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import { LoadingStatus } from "@/store/user/user.interface";
import { IMenuListItem } from "@/types/helpers.types";
import Button from "@/components/UI/Button/Button";
import { logout } from "@/store/user/user.actions";
import MenuListItem from "@/components/MenuList/MenuListItem/MenuListItem";
import Link from "next/link";

const LeftSidebar: FC = () => {
  const isAuth = useSelector(checkIsAuth);
  const { user } = useSelector((state: RootState) => state.user);

  const dispatch = useDispatch<AppDispatch>();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <aside className="container-mini sidebar sidebar--left">
      <Logo className="sidebar__logo" />
      <nav className="menu">
        <MenuList items={NavigationListItems} title="Menu" />
        <GenresMenuList />
        {isAuth ? (
          <div className="sidebar__auth-menu">
            <MenuList items={GeneralAuthListItems} title="General" />
            <button className="sidebar__logout" onClick={handleLogout}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon--filled"
              >
                <path
                  d="M17 2H7C6.20435 2 5.44129 2.31607 4.87868 2.87868C4.31607 3.44129 4 4.20435 4 5V19C4 19.7956 4.31607 20.5587 4.87868 21.1213C5.44129 21.6839 6.20435 22 7 22H17C17.7956 22 18.5587 21.6839 19.1213 21.1213C19.6839 20.5587 20 19.7956 20 19V16C20 15.7348 19.8946 15.4804 19.7071 15.2929C19.5196 15.1054 19.2652 15 19 15C18.7348 15 18.4804 15.1054 18.2929 15.2929C18.1054 15.4804 18 15.7348 18 16V19C18 19.2652 17.8946 19.5196 17.7071 19.7071C17.5196 19.8946 17.2652 20 17 20H7C6.73478 20 6.48043 19.8946 6.29289 19.7071C6.10536 19.5196 6 19.2652 6 19V5C6 4.73478 6.10536 4.48043 6.29289 4.29289C6.48043 4.10536 6.73478 4 7 4H17C17.2652 4 17.5196 4.10536 17.7071 4.29289C17.8946 4.48043 18 4.73478 18 5V8C18 8.26522 18.1054 8.51957 18.2929 8.70711C18.4804 8.89464 18.7348 9 19 9C19.2652 9 19.5196 8.89464 19.7071 8.70711C19.8946 8.51957 20 8.26522 20 8V5C20 4.20435 19.6839 3.44129 19.1213 2.87868C18.5587 2.31607 17.7956 2 17 2Z"
                  fill="black"
                />
                <path
                  d="M7.99998 12.0041C7.99998 11.7389 8.10534 11.4845 8.29287 11.297C8.48041 11.1094 8.73477 11.0041 8.99998 11.0041H16.59L14.29 8.71409C14.1967 8.62085 14.1228 8.51016 14.0723 8.38834C14.0219 8.26652 13.9959 8.13595 13.9959 8.00409C13.9959 7.87223 14.0219 7.74166 14.0723 7.61984C14.1228 7.49802 14.1967 7.38733 14.29 7.29409C14.3832 7.20085 14.4939 7.12689 14.6157 7.07643C14.7376 7.02597 14.8681 7 15 7C15.1318 7 15.2624 7.02597 15.3842 7.07643C15.5061 7.12689 15.6167 7.20085 15.71 7.29409L19.71 11.2941C19.801 11.3892 19.8724 11.5013 19.92 11.6241C20.02 11.8676 20.02 12.1406 19.92 12.3841C19.8724 12.5068 19.801 12.619 19.71 12.7141L15.71 16.7141C15.617 16.8078 15.5064 16.8822 15.3846 16.933C15.2627 16.9838 15.132 17.0099 15 17.0099C14.868 17.0099 14.7373 16.9838 14.6154 16.933C14.4935 16.8822 14.3829 16.8078 14.29 16.7141C14.1963 16.6211 14.1219 16.5105 14.0711 16.3887C14.0203 16.2668 13.9942 16.1361 13.9942 16.0041C13.9942 15.8721 14.0203 15.7414 14.0711 15.6195C14.1219 15.4977 14.1963 15.3871 14.29 15.2941L16.59 13.0041H8.99998C8.73477 13.0041 8.48041 12.8987 8.29287 12.7112C8.10534 12.5237 7.99998 12.2693 7.99998 12.0041Z"
                  fill="black"
                />
              </svg>
              Log Out
            </button>
          </div>
        ) : (
          <MenuList items={GeneralListItems} title="General" />
        )}
      </nav>
    </aside>
  );
};

export default LeftSidebar;

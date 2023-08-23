"use client";

import { FC, useEffect } from "react";
import "./Menu.scss";
import LeftSidebar from "./LeftSidebar/LeftSidebar";
import RightSidebar from "./RightSidebar/RightSidebar";
import { checkAuth } from "@/store/user/user.actions";
import { AppDispatch } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";
import { checkIsAuth } from "@/store/user/user.slice";
import Cookies from "js-cookie";

const Menu: FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  // useEffect(() => {
  //   console.log("ACCT", Cookies.get("accessToken"));

  //   if (Cookies.get("accessToken")) {
  //     console.log("CAME HERE");

  //     dispatch(checkAuth());
  //   }
  // }, []);

  return (
    <>
      <LeftSidebar />
      <RightSidebar />
    </>
  );
};

export default Menu;

// ==> Libs imports <===
import { FC } from "react";
// ==> Components imports <===

// ==> Other imports <===
import "./Menu.scss";
import LeftSidebar from "./LeftSidebar/LeftSidebar";
import RightSidebar from "./RightSidebar/RightSidebar";

const Menu: FC = () => {
  return (
    <>
      <LeftSidebar />
      <RightSidebar />
    </>
  );
};

export default Menu;

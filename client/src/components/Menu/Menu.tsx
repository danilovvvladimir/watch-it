import { FC } from "react";
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

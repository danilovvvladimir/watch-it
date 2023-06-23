// ==> Libs imports <===
import { FC } from "react";
import Link from "next/link";

// ==> Components imports <===

// ==> Other imports <===
import "./MenuItem.scss";
import { IMenuListItem } from "@/types/types";

interface MenuItemProps extends IMenuListItem {
  isActive?: boolean;
}

const LINK_CLASSNAME = "menu__list-item-link";
const LINK_ACTIVE_CLASSNAME =
  "menu__list-item-link menu__list-item-link--active";

const MenuItem: FC<MenuItemProps> = ({ title, url, isActive, icon }) => {
  return (
    <li className="menu__list-item">
      <Link
        href={url}
        className={isActive ? LINK_ACTIVE_CLASSNAME : LINK_CLASSNAME}
      >
        {icon}
        {title}
      </Link>
    </li>
  );
};

export default MenuItem;

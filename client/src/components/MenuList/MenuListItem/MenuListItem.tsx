import { FC } from "react";
import Link from "next/link";
import "./MenuListItem.scss";
import { IMenuListItem } from "@/types/types";

interface MenuListItemProps extends IMenuListItem {
  isActive?: boolean;
}

const LINK_CLASSNAME = "menu__list-item-link";
const LINK_ACTIVE_CLASSNAME =
  "menu__list-item-link menu__list-item-link--active";

const MenuListItem: FC<MenuListItemProps> = ({
  title,
  url,
  isActive,
  icon,
}) => {
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

export default MenuListItem;

// ==> Libs imports <===
import { FC } from "react";
// ==> Components imports <===

// ==> Other imports <===
import "./MenuList.scss";
import MenuItem from "../MenuItem/MenuItem";
import { MenuListItem } from "@/constants/constants";

interface MenuListProps {
  items: MenuListItem[];
  title: string;
}

const MenuList: FC<MenuListProps> = ({ items, title }) => {
  return (
    <div className="menu__item">
      <h4 className="menu__item-title">{title}</h4>
      <ul className="menu__list">
        {items.map((item) => (
          <MenuItem
            key={item.id}
            title={item.title}
            url={item.url}
            icon={item.icon}
            id={item.id}
          />
        ))}
      </ul>
    </div>
  );
};

export default MenuList;

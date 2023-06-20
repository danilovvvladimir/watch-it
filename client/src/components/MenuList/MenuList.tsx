"use client";

// ==> Libs imports <===
import { FC } from "react";
// ==> Components imports <===

// ==> Other imports <===
import "./MenuList.scss";
import MenuItem from "../MenuItem/MenuItem";
import { MenuListItem } from "@/constants/constants";
import { usePathname, useRouter } from "next/navigation";

interface MenuListProps {
  items: MenuListItem[];
  title: string;
}

const MenuList: FC<MenuListProps> = ({ items, title }) => {
  const pathname = usePathname();

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
            isActive={pathname === item.url}
          />
        ))}
      </ul>
    </div>
  );
};

export default MenuList;

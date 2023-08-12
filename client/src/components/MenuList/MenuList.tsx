"use client";

import { FC } from "react";
import "./MenuList.scss";
import { usePathname, useRouter } from "next/navigation";
import { IMenuListItem } from "@/types/helpers.types";
import MenuListItem from "./MenuListItem/MenuListItem";

interface MenuListProps {
  items: IMenuListItem[];
  title: string;
}

const MenuList: FC<MenuListProps> = ({ items, title }) => {
  const pathname = usePathname();

  return (
    <div className="menu__item">
      <h4 className="menu__item-title">{title}</h4>
      <ul className="menu__list">
        {items.map((item) => (
          <MenuListItem
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

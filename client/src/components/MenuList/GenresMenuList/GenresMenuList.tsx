// "use client";

// ==> Libs imports <===
import React, { FC } from "react";
// ==> Components imports <===

// ==> Other imports <===
import "../MenuList.scss";
import { usePathname, useRouter } from "next/navigation";
import { IGenre } from "@/types/movies.types";
import MenuItem from "@/components/MenuItem/MenuItem";
import { transformCodeToSvg } from "@/utils/transformCodeToSvg";
import { defaultGenreIcon } from "@/constants/constants";
import { API_URL } from "@/configs/api.config";
import SkeletonLoader from "./SkeletonLoader/SkeletonLoader";
import MenuList from "../MenuList";
import { transformGenreToMenuItem } from "@/utils/transformToMenuItem";

const getPopularGenres = async () => {
  const response = await fetch(API_URL + "/genres");
  const data: IGenre[] = await response.json();

  return data.slice(0, 5);
};

const GenresMenuList: FC = async () => {
  const popularGenres: IGenre[] = await getPopularGenres();
  const genresListItems = popularGenres.map((genre) =>
    transformGenreToMenuItem(genre)
  );

  return <MenuList items={genresListItems} title="Popular Genres" />;
};

export default GenresMenuList;

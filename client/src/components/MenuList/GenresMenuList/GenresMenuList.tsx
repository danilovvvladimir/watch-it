// "use client";

import React, { FC, useState, useEffect } from "react";
import "../MenuList.scss";
import MenuList from "../MenuList";
import { transformGenreToMenuItem } from "@/utils/transformToMenuItem";
import GenreService from "@/services/genre/genre.service";
import usePopularGenres from "@/hooks/usePopularGenres";
import { NavigationListItems } from "@/constants/constants";
import { IGenre } from "@/types";
import { API_URL } from "@/configs/api.config";

const getPopular = async () => {
  const response = await fetch(`${API_URL}/genres`);

  return response.json();
};

const GenresMenuList: FC = async () => {
  console.log("GENRES RENDER");
  // const genreService = new GenreService();
  // const popularGenres = await genreService.getPopular();
  const popularGenres: IGenre[] = await getPopular();

  return (
    <MenuList
      items={popularGenres.map((genre) => transformGenreToMenuItem(genre))}
      title="Popular Genres"
    />
  );
};

export default GenresMenuList;

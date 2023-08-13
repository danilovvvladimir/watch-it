// "use client";

import React, { FC, useState, useEffect } from "react";
import "../MenuList.scss";
import MenuList from "../MenuList";
import { transformGenreToMenuItem } from "@/utils/transformToMenuItem";
import { IGenre } from "@/types";
import { API_URL } from "@/configs/api.config";
import GenreService from "@/services/genre/genre.service";

const getPopular = async () => {
  const response = await fetch(`${API_URL}/genres`);

  return response.json();
};

const GenresMenuList: FC = async () => {
  console.log("GENRES RENDER");
  const genreService = new GenreService();
  const popularGenres = (await genreService.getAll()).slice(0, 4);
  // const popularGenres: IGenre[] = await getPopular();

  return (
    <MenuList
      items={popularGenres.map((genre) => transformGenreToMenuItem(genre))}
      title="Popular Genres"
    />
  );
};

export default GenresMenuList;

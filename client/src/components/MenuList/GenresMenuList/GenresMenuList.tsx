"use client";

import React, { FC, useState, useEffect } from "react";
import "../MenuList.scss";
import MenuList from "../MenuList";
import { transformGenreToMenuItem } from "@/utils/transformToMenuItem";
import GenreService from "@/services/genre/genre.service";
import usePopularGenres from "@/hooks/usePopularGenres";
import { NavigationListItems } from "@/constants/constants";
import { IGenre } from "@/types";

const GenresMenuList: FC = () => {
  console.log("GENRES RENDER");
  const [popularGenres, setPopularGenres] = useState<IGenre[] | null>(null);

  useEffect(() => {
    const fetchPopularGenres = async () => {
      const genreService = new GenreService();
      const genres = await genreService.getPopular();

      setPopularGenres(genres.slice(0, 4));
    };

    fetchPopularGenres();
  }, []);

  if (popularGenres === null) {
    return <div>Загрузка...</div>;
  }

  return (
    <MenuList
      items={popularGenres.map((genre) => transformGenreToMenuItem(genre))}
      title="Popular Genres"
    />
  );
};

export default GenresMenuList;

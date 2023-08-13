"use client";

import React, { FC, useEffect, useState } from "react";
import "../MenuList.scss";
import MenuList from "../MenuList";
import { transformGenreToMenuItem } from "@/utils/transformToMenuItem";
import { IGenre } from "@/types";
import { API_URL } from "@/configs/api.config";
import GenreService from "@/services/genre/genre.service";
import Loader from "@/components/UI/Loader/Loader";

const GenresMenuList: FC = () => {
  const [popularGenres, setPopularGenres] = useState<IGenre[] | null>(null);

  useEffect(() => {
    const fetchGenres = async () => {
      const genreService = new GenreService();
      const genres = (await genreService.getAll()).slice(0, 4);
      setPopularGenres(genres);
    };

    fetchGenres();
  }, []);

  if (popularGenres === null) {
    return <Loader />;
  }

  return (
    <MenuList
      items={popularGenres.map((genre) => transformGenreToMenuItem(genre))}
      title="Popular Genres"
    />
  );
};

export default GenresMenuList;

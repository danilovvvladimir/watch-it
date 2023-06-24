"use client";

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

const getPopularGenres = async () => {
  const response = await fetch("http://localhost:4444/api/genres");
  console.log("response:", response);

  return response.json();
};

const GenresMenuList: FC = () => {
  const [popularGenres, setPopularGenres] = React.useState<IGenre[]>([]);
  const pathname = usePathname();

  React.useEffect(() => {
    const fetchSomeGenres = async () => {
      const genres: IGenre[] = await getPopularGenres();
      console.log(genres);

      setPopularGenres(genres.slice(0, 4));
    };

    fetchSomeGenres();
  }, []);

  return (
    <div className="menu__item">
      <h4 className="menu__item-title">Popular Genres</h4>
      <ul className="menu__list">
        {popularGenres.length ? (
          popularGenres.map((genre) => {
            const transformedIcon = transformCodeToSvg(genre.icon);
            const genreIcon = transformedIcon
              ? transformedIcon
              : defaultGenreIcon;

            const genreUrl = `genres/${genre.slug}`;
            return (
              <MenuItem
                key={genre._id}
                id={genre._id}
                title={genre.name}
                url={genreUrl}
                icon={genreIcon}
                isActive={pathname === genreUrl}
              />
            );
          })
        ) : (
          <SkeletonLoader count={4} />
        )}
      </ul>
    </div>
  );
};

export default GenresMenuList;

import { IGenre } from "@/types/movies.types";
import { IMenuListItem } from "@/types/helpers.types";
import { transformCodeToSvg } from "./transformCodeToSvg";
import { defaultGenreIcon } from "@/constants/constants";

export const transformGenreToMenuItem = (genre: IGenre): IMenuListItem => {
  const transformedIcon = transformCodeToSvg(genre.icon);
  const genreIcon = transformedIcon ? transformedIcon : defaultGenreIcon;
  const genreUrl = `/genres/${genre.slug}`;

  return {
    id: genre._id,
    title: genre.name,
    url: genreUrl,
    icon: genreIcon,
  };
};

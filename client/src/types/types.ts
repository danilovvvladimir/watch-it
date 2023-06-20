import { StaticImageData } from "next/image";

export interface IMenuListItem {
  title: string;
  url: string;
  id: string;
  icon: JSX.Element;
}

export interface IMovieSmall {
  title: string;
  url: string;
  image: StaticImageData;
  rating: number;
  genres: string[];
  id: string;
}

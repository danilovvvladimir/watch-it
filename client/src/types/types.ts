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

export interface ISlide {
  bgImage: StaticImageData;
  title: string;
  genres: string[];
  url: string;
  id: string;
}

export interface ICard {
  image: StaticImageData;
  altImage: string;
  hoverTitle?: string;
  hoverSubtitle?: string;
  url: string;
  id: string;
}

export interface ICards {
  cards: ICard[];
  title: string;
}

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
  image: string;
  rating: number;
  genres: string[];
  id: string;
}

export interface IMovieMedium {
  title: string;
  url: string;
  image: StaticImageData;
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
  image: string;
  altImage: string;
  hoverTitle?: string;
  hoverSubtitle?: string;
  url: string;
  id: string;
}

export interface ICards {
  cards: ICard[];
  href: string;
  title: string;
}

export interface IGenreCollection {
  genreTitle: string;
  url: string;
  movies: IMovieMedium[];
}

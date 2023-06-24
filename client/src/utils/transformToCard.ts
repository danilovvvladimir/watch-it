import { IActor, IGenre, IMovie } from "@/types/movies.types";
import { ICard } from "@/types/types";

export const transformMovieToCard = (movie: IMovie): ICard => {
  return {
    id: movie._id,
    image: movie.poster,
    url: movie.slug,
    altImage: movie.title,
    hoverTitle: movie.title,
  };
};
export const transformActorToCard = (actor: IActor): ICard => {
  return {
    id: actor._id,
    image: actor.photo,
    url: actor.slug,
    altImage: actor.name,
    hoverTitle: actor.name,
  };
};
export const transformGenreToCard = (genre: IGenre): ICard => {
  return {
    id: genre._id,
    image: "",
    url: genre.slug,
    altImage: genre.name,
    hoverTitle: genre.name,
  };
};

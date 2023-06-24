import { IActor, ICollection, IGenre, IMovie } from "@/types/movies.types";
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
export const transformGenreCollectionToCard = (
  collection: ICollection
): ICard => {
  return {
    id: collection._id,
    image: collection.imageNormal,
    url: collection.slug,
    altImage: collection.name,
    hoverTitle: collection.name,
  };
};

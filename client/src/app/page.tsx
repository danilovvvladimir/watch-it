import { FC } from "react";
import "./HomePage.scss";
import Slider from "@/components/Slider/Slider";
import { Slides } from "@/constants/constants";
import CardList from "@/components/CardList/CardList";
import {
  transformActorToCard,
  transformGenreCollectionToCard,
  transformMovieToCard,
} from "@/utils/transformToCard";
import { IMovie, IActor } from "@/types";
import { ICollection, ICards } from "@/types/helpers.types";
import MovieService from "@/services/movie/movie.service";
import GenreService from "@/services/genre/genre.service";
import ActorService from "@/services/actor/actors.service";

const HomePage: FC = async () => {
  const movieService = new MovieService();
  const actorService = new ActorService();
  const genreService = new GenreService();

  const movies: IMovie[] = await movieService.getAll();
  const actors: IActor[] = await actorService.getAll();
  const genresCollection: ICollection[] = await genreService.getCollection();

  const moviesCards: ICards = {
    cards: movies.slice(0, 5).map((movie) => transformMovieToCard(movie)),
    href: "/movies",
    title: "Trending Now",
  };

  const actorsCards: ICards = {
    cards: actors.slice(0, 5).map((actor) => transformActorToCard(actor)),
    href: "/actors",
    title: "Best Actors",
  };

  const genreCollectionCards: ICards = {
    cards: genresCollection
      .slice(0, 5)
      .map((genreCollection) =>
        transformGenreCollectionToCard(genreCollection)
      ),
    href: "/genres",
    title: "Genre",
  };

  return (
    <section className="home-page">
      <div className="container">
        <h1 className="title home-page__title">Watch movies online</h1>
        <Slider slides={Slides} />
        <CardList cards={moviesCards} />
        <CardList cards={actorsCards} />
        <CardList cards={genreCollectionCards} />
      </div>
    </section>
  );
};

export default HomePage;

// ==> Libs imports <===
import { FC } from "react";
// ==> Components imports <===

// ==> Other imports <===
import "./HomePage.scss";
import Slider from "@/components/Slider/Slider";
import { Slides } from "@/constants/constants";
import CardList from "@/components/CardList/CardList";
import { IActor, ICollection, IGenre, IMovie } from "@/types/movies.types";
import {
  transformActorToCard,
  transformGenreCollectionToCard,
  transformMovieToCard,
} from "@/utils/transformToCard";
import { ICard, ICards } from "@/types/types";

const getMovies = async () => {
  const response = await fetch("http://localhost:4444/api/movies");

  return response.json();
};

const getActors = async () => {
  const response = await fetch("http://localhost:4444/api/actors");

  return response.json();
};

const getGenresCollection = async () => {
  const response = await fetch("http://localhost:4444/api/genres/collections");

  return response.json();
};

const HomePage: FC = async () => {
  const movies: IMovie[] = await getMovies();
  const actors: IActor[] = await getActors();
  const genresCollection: ICollection[] = await getGenresCollection();

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

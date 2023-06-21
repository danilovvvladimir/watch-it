// ==> Libs imports <===
import { FC } from "react";
// ==> Components imports <===

// ==> Other imports <===
import "./HomePage.scss";
import Slider from "@/components/Slider/Slider";
import {
  CardsActors,
  CardsFilms,
  CardsGenres,
  Slides,
} from "@/constants/constants";
import CardList from "@/components/CardList/CardList";

const HomePage: FC = () => {
  return (
    <section className="home-page">
      <div className="container">
        <h1 className="title home-page__title">Watch movies online</h1>
        <Slider slides={Slides} />
        {/* List - films*/}
        <CardList cards={CardsFilms} />
        {/* List - actors*/}
        <CardList cards={CardsActors} />
        {/* List - genres*/}
        <CardList cards={CardsGenres} />
      </div>
    </section>
  );
};

export default HomePage;

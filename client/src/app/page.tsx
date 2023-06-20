// ==> Libs imports <===
import { FC } from "react";
// ==> Components imports <===

// ==> Other imports <===
import "./HomePage.scss";
import Slider from "@/components/Slider/Slider";
import { Slides } from "@/constants/constants";

const HomePage: FC = () => {
  return (
    <section className="home-page">
      <div className="container">
        <h1 className="title home-page__title">Watch movies online</h1>
        <Slider slides={Slides} />
        {/* List - films*/}
        {/* List - actors*/}
        {/* List - genres*/}
      </div>
    </section>
  );
};

export default HomePage;

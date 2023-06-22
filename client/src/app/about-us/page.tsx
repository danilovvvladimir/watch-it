// ==> Libs imports <===
import { FC } from "react";
// ==> Components imports <===

// ==> Other imports <===
import "./AboutUsPage.scss";

export const metadata = {
  title: "Watch IT | About Us",
  description:
    "Whatever your taste, and no matter where you live, we give you access to best-in-class TV series, documentaries, feature films and more. ",
};

const AboutUsPage: FC = () => {
  return (
    <section className="about-us-page">
      <div className="container">
        <h1 className="title about-us-page__title">
          Stories move us. <br />
          They make us feel more emotion, see new perspectives, and bring us
          closer to each other.
        </h1>

        <p className="about-us-page__description">
          At Netflix, we want to entertain the world. Whatever your taste, and
          no matter where you live, we give you access to best-in-class TV
          series, documentaries, feature films and mobile games. Our members
          control what they want to watch, when they want it, in one simple
          subscription.
        </p>
        <p className="about-us-page__description">
          We're streaming in more than 30 languages and 190 countries, because
          great stories can come from anywhere and be loved everywhere. We are
          the world's biggest fans of entertainment, and we're always looking to
          help you find your next favorite story.
        </p>
      </div>
    </section>
  );
};

export default AboutUsPage;

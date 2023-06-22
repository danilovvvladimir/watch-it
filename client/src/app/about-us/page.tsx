// ==> Libs imports <===
import { FC } from "react";
// ==> Components imports <===

// ==> Other imports <===
import "./AboutUsPage.scss";
import Image from "next/image";
import decorations from "@/assets/images/decorations/about-us-decorations.svg";

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
          Stories move <span>us.</span> <br />
          They make us feel more emotion, see new perspectives, and bring us
          <br />
          closer to each other.
        </h1>

        <p className="about-us-page__description">
          We&apos;re streaming in more than 30 languages and 190 countries,
          because great stories can come from anywhere and be loved everywhere.
        </p>
        <p className="about-us-page__description">
          We are the world&apos;s biggest fans of entertainment, and we&apos;re
          always looking to help you find your next favorite story.
        </p>
        <Image
          src={decorations}
          alt="decoration"
          className="about-us-page__decorations"
        />
      </div>
    </section>
  );
};

export default AboutUsPage;

"use client";

// ==> Libs imports <===
import { FC } from "react";
import Image from "next/image";

// ==> Components imports <===
import Button from "@/components/UI/Button/Button";

// ==> Other imports <===
import "./NotFoundPage.scss";
import notfoundIMG from "@/assets/images/404error.svg";

export const metadata = {
  title: "Watch IT | Not Found",
  description:
    "You may have used an invalid link or the page has been deleted.",
};

const NotFoundPage: FC = () => {
  return (
    <section className="not-found">
      <div className="container">
        <div className="not-found__wrapper">
          <div className="not-found__textbox">
            <h1 className="not-found__title">Error. Page is not found.</h1>
            <p className="not-found__subtitle">
              You may have used an invalid link or the page has been deleted.
              Check the URL or go to the main page, the best movies and TV
              series are waiting for you there.
            </p>
            <Button className="not-found__button">Go Back</Button>
          </div>
          <Image src={notfoundIMG} alt="not-found" />
        </div>
      </div>
    </section>
  );
};

export default NotFoundPage;

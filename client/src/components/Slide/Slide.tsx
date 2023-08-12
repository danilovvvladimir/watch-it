import { FC } from "react";
import "./Slide.scss";
import { ISlide } from "@/types/helpers.types";
import Image from "next/image";
import Link from "next/link";
import Button from "../UI/Button/Button";

interface SlideProps extends ISlide {}

const Slide: FC<SlideProps> = ({ bgImage, genres, title, url }) => {
  return (
    <div className="slider__slide">
      <Image src={bgImage} alt={title} className="slider__slide-image" />
      <div className="slider__slide-textbox">
        <h2 className="slider__slide-title">{title}</h2>
        <div className="slider__slide-genres">
          {genres.map((genre, index) => (
            <div key={genre} className="slider__slide-genre">
              {genre}
              {index !== genres.length - 1 && ", "}
            </div>
          ))}
        </div>
        <Link href={url} className="button slider__slide-button">
          Watch
        </Link>
      </div>
      <div className="slider__slide-controllers">
        <button className="slider__slide-control slider__slide-control--left">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.0539 11.4093L16.6195 3.15697C16.6471 3.13523 16.6803 3.12173 16.7153 3.118C16.7502 3.11427 16.7855 3.12047 16.8171 3.13589C16.8486 3.15131 16.8752 3.17532 16.8938 3.20517C16.9123 3.23502 16.922 3.26949 16.9219 3.30463V5.11635C16.9219 5.23119 16.868 5.34134 16.7789 5.41166L8.3414 11.9999L16.7789 18.5882C16.8703 18.6585 16.9219 18.7687 16.9219 18.8835V20.6953C16.9219 20.8523 16.7414 20.939 16.6195 20.8429L6.0539 12.5906C5.9641 12.5205 5.89146 12.4309 5.84149 12.3286C5.79153 12.2262 5.76555 12.1138 5.76555 11.9999C5.76555 11.886 5.79153 11.7737 5.84149 11.6713C5.89146 11.569 5.9641 11.4794 6.0539 11.4093Z"
              fill="white"
              stroke="white"
              strokeWidth="2"
            />
          </svg>
        </button>
        <button className="slider__slide-control slider__slide-control--right">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.9461 11.4093L7.38047 3.15697C7.35286 3.13523 7.31968 3.12173 7.28474 3.118C7.2498 3.11427 7.21452 3.12047 7.18295 3.13589C7.15137 3.15131 7.12479 3.17532 7.10625 3.20517C7.08771 3.23502 7.07796 3.26949 7.07813 3.30463V5.11635C7.07813 5.23119 7.13203 5.34134 7.2211 5.41166L15.6586 11.9999L7.2211 18.5882C7.12969 18.6585 7.07813 18.7687 7.07813 18.8835V20.6953C7.07813 20.8523 7.2586 20.939 7.38047 20.8429L17.9461 12.5906C18.0359 12.5205 18.1085 12.4309 18.1585 12.3286C18.2085 12.2262 18.2344 12.1138 18.2344 11.9999C18.2344 11.886 18.2085 11.7737 18.1585 11.6713C18.1085 11.569 18.0359 11.4794 17.9461 11.4093Z"
              fill="white"
              stroke="white"
              strokeWidth="2"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Slide;

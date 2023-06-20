// ==> Libs imports <===
import { FC } from "react";
// ==> Components imports <===

// ==> Other imports <===
import "./Slider.scss";
import { StaticImageData } from "next/image";
import { ISlide } from "@/types/types";
import Slide from "../Slide/Slide";

interface SliderProps {
  slides: ISlide[];
}

const Slider: FC<SliderProps> = ({ slides }) => {
  return (
    <div className="slider">
      {slides.map((slide) => (
        <Slide
          url={slide.url}
          bgImage={slide.bgImage}
          genres={slide.genres}
          title={slide.title}
          key={slide.id}
          id={slide.id}
        />
      ))}
    </div>
  );
};

export default Slider;

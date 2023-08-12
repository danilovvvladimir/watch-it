import { FC } from "react";
import "./Card.scss";
import Image from "next/image";
import { ICard } from "@/types/helpers.types";
import Link from "next/link";

interface CardProps extends ICard {}

const Card: FC<CardProps> = ({
  image,
  altImage,
  hoverSubtitle,
  hoverTitle,
  url,
}) => {
  return (
    <Link href={url} className="card">
      <Image
        src={image}
        alt={altImage}
        className="card__image"
        width={200}
        height={297}
      />
      <div className="card__hover">
        <div className="card__hover-textbox">
          <div className="card__hover-title">{hoverTitle}</div>
          <div className="card__hover-subtitle">{hoverSubtitle}</div>
        </div>
      </div>
    </Link>
  );
};

export default Card;

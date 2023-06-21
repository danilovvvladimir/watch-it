// ==> Libs imports <===
import { FC } from "react";
// ==> Components imports <===

// ==> Other imports <===
import "./CardList.scss";
import { ICards } from "@/types/types";
import Card from "../Card/Card";
import Link from "next/link";

interface CardListProps {
  cards: ICards;
}

const CardList: FC<CardListProps> = ({ cards: { cards, title, href } }) => {
  return (
    <div className="cards">
      <div className="cards__titlebox">
        <h2 className="cards__title">{title}</h2>
        <div className="divider"></div>
      </div>
      <div className="cards__list">
        {cards.map((card) => (
          <Card
            key={card.id}
            id={card.id}
            image={card.image}
            altImage={card.altImage}
            hoverTitle={card.hoverTitle}
            hoverSubtitle={card.hoverSubtitle}
            url={card.url}
          />
        ))}
        <Link href={href} className="button cards__button">
          <svg
            width="36"
            height="36"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.9461 11.4093L7.38047 3.15697C7.35286 3.13523 7.31968 3.12173 7.28474 3.118C7.2498 3.11427 7.21452 3.12047 7.18295 3.13589C7.15137 3.15131 7.12479 3.17532 7.10625 3.20517C7.08771 3.23502 7.07796 3.26949 7.07813 3.30463V5.11635C7.07813 5.23119 7.13203 5.34134 7.2211 5.41166L15.6586 11.9999L7.2211 18.5882C7.12969 18.6585 7.07813 18.7687 7.07813 18.8835V20.6953C7.07813 20.8523 7.2586 20.939 7.38047 20.8429L17.9461 12.5906C18.0359 12.5205 18.1085 12.4309 18.1585 12.3286C18.2085 12.2262 18.2344 12.1138 18.2344 11.9999C18.2344 11.886 18.2085 11.7737 18.1585 11.6713C18.1085 11.569 18.0359 11.4794 17.9461 11.4093Z"
              fill="white"
              stroke="white"
              strokeWidth="1"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default CardList;

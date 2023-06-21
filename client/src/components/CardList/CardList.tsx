// ==> Libs imports <===
import { FC } from "react";
// ==> Components imports <===

// ==> Other imports <===
import "./CardList.scss";
import { ICard, ICards } from "@/types/types";
import Card from "../Card/Card";

interface CardListProps {
  cards: ICards;
}

const CardList: FC<CardListProps> = ({ cards: { cards, title } }) => {
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
      </div>
    </div>
  );
};

export default CardList;

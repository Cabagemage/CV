import type { FC } from "react";
import type { CardProps } from "./Card.typedef";

const Card: FC<CardProps> = ({
  cardData: { headerText, description, imageSrc, title },
}) => {
  return (
    <article className="p-5 border rounded-xl flex flex-col">
      <span className="mb-1 font-medium text-m">{headerText}</span>
      <div className="flex  gap-4">
        <img
          src={imageSrc ?? ""}
          alt={title}
          className="h-[120px] w-[140px] rounded-xl self-end"
        />
        <div className="flex flex-col">
          <h2 className="font-bold text-2xl mb-2">{title}</h2>
          <p className="text-s">{description}</p>
        </div>
      </div>
    </article>
  );
};

export default Card;

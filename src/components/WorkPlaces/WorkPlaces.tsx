import type { FC } from "react";
import type { WorkPlacesProps } from "./WorkPlaces.typedef";
import "./WorkPlaces.css";
import { Card } from "../../ui/Card";

export const WorkPlaces: FC<WorkPlacesProps> = ({ workPlaces }) => {
  return (
    <ul className="flex flex-col gap-4 w-[100%]">
      {workPlaces.map((item) => {
        return (
          <li>
            <Card cardData={item} />
          </li>
        );
      })}
    </ul>
  );
};

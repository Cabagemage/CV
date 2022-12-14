import type { FC } from "react";
import type { WorkPlacesProps } from "./WorkPlaces.typedef";

import Card from "../../ui/Card/Card";

const WorkPlaces: FC<WorkPlacesProps> = ({ workPlaces }) => {
  return (
    <ul className="flex flex-col gap-4 w-[100%]">
      {workPlaces.map((item) => {
        return (
          <li key={item.title}>
            <Card cardData={item} />
          </li>
        );
      })}
    </ul>
  );
};

export default WorkPlaces;

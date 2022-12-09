import type { FC } from "react";
import type { HeadingProps } from "./Heading.typedef";

import "./Heading.css";

export const Heading: FC<HeadingProps> = (props) => {
  return (
    <section className="flex flex-col gap-4 self-start">
      <h1 className="text-5xl font-medium">Андрей Зайцев</h1>
      <h2 className="text-3xl">26 лет, Front-End Developer</h2>
    </section>
  );
};

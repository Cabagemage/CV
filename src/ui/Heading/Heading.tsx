import type { FC } from "react";
import type { HeadingProps } from "./Heading.typedef";

import "./Heading.css";

const Heading: FC<HeadingProps> = ({ title, subtitle }) => (
  <section className="heading text-white">
    <h1 className="heading__title">{title}</h1>
    <h2 className="heading__subtitle">{subtitle}</h2>
  </section>
);

export default Heading;

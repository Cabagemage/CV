import type { FC } from "react";
import "./Heading.css";
import type { HeadingProps } from "./Heading.typedef";

export const Heading: FC<HeadingProps> = ({ title, subtitle }) => (
  <section className="heading">
    <h1 className="heading__title">{title}</h1>
    <h2 className="heading__subtitle">{subtitle}</h2>
  </section>
);

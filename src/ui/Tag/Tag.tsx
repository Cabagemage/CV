import type { FC } from "react";
import type { TagProps } from "./Tag.typedef";

import "./Tag.css";

const Tag: FC<TagProps> = ({ theme, text, srcLink }) => {
  if (srcLink !== undefined) {
    return (
      <a
        className={`tag tag__theme_${theme}`}
        href={srcLink}
        target="_blank"
        rel="noreferrer"
      >
        {text}
      </a>
    );
  }

  return (
    <div className={`tag tag__theme_${theme}`}>
      <p>{text}</p>
    </div>
  );
};

export default Tag;

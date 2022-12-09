import type { FC } from "react";
import type { ContactProps } from "./Contact.typedef";

import "./Contact.css";
import classNames from "classnames";

export const Contact: FC<ContactProps> = ({ iconSrc, text, theme, link }) => {
  return (
    <a
      className={classNames(
        "contact items-center rounded-[8px]",
        `contact__theme_${theme}`
      )}
      href={link}
      target="_blank"
    >
      <img
        className="w-[28px] h-[32px] mr-4 flex-shrink-0"
        alt={text}
        src={iconSrc}
      />
      <p>{text}</p>
    </a>
  );
};

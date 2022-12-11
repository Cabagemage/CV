import type { FC } from "react";
import classNames from "classnames";

import type { ContactProps } from "./Contact.typedef";

import "./Contact.css";

const Contact: FC<ContactProps> = ({ iconSrc, text, theme, link }) => (
  <a
    className={classNames(
      "contact items-center rounded-[8px]",
      `contact__theme_${theme}`
    )}
    href={link}
    target="_blank"
    rel="noreferrer"
  >
    <img
      className="w-[28px] h-[32px] mr-4 flex-shrink-0"
      alt={text}
      src={iconSrc}
    />
    <p>{text}</p>
  </a>
);

export default Contact;

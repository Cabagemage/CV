import type { FC } from "react";
import type { TagsProps } from "./Tags.typedef";
import "./Tags.css";
import { SideBarBlockTitle } from "../../ui";
import { Tag } from "../../ui/Tag";
import { themes } from "./Tags.data";

export const Tags: FC<TagsProps> = ({ tags, typeWriterText }) => (
  <div className="tags">
    <SideBarBlockTitle text={typeWriterText} />
    <div className="tags__tags mt-4">
      {tags.map((item) => {
        const randomIndexOfTheme = Math.floor(Math.random() * themes.length);
        const randomTheme = themes[randomIndexOfTheme];
        return (
          <Tag text={item.text} theme={randomTheme} srcLink={item.srcLink} />
        );
      })}
    </div>
  </div>
);
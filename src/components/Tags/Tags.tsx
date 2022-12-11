import type { FC } from "react";
import type { TagsProps } from "./Tags.typedef";
import "./Tags.css";
import SideBarBlockTitle from "../../ui/SideBarBlockTitle/SideBarBlockTitle";
import Tag from "../../ui/Tag/Tag";
import { themes } from "./Tags.data";

const Tags: FC<TagsProps> = ({ tags, typeWriterText }) => (
  <div className="tags">
    <SideBarBlockTitle text={typeWriterText} />
    <ul className="tags__tags mt-4">
      {tags.map((item) => {
        const randomIndexOfTheme = Math.floor(Math.random() * themes.length);
        const randomTheme = themes[randomIndexOfTheme];
        return (
          <li key={item.text}>
            <Tag text={item.text} theme={randomTheme} srcLink={item.srcLink} />
          </li>
        );
      })}
    </ul>
  </div>
);

export default Tags;

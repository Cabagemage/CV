import type { SideBarBlockTitleProps } from "./SideBarBlockTitleProps.typedef";

import "./SidebarBlockTitle.css";

const SideBarBlockTitle = ({ text }: SideBarBlockTitleProps) => {
  return <h2 className="text-2xl w-[100%] text-white font-bold">{text}</h2>;
};

export default SideBarBlockTitle;

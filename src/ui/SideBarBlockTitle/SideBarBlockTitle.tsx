import "./SidebarBlockTitle.css";
import type { SideBarBlockTitleProps } from "./SideBarBlockTitleProps.typedef";

export const SideBarBlockTitle = ({ text }: SideBarBlockTitleProps) => (
  <h2 className="text-2xl w-[100%] text-white font-bold">{text}</h2>
);

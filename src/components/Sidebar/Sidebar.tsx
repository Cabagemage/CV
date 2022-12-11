import type { FC, ReactNode } from "react";

type SideBarProps = {
  children: ReactNode | Array<ReactNode>;
  className?: string;
};

export const SideBar: FC<SideBarProps> = ({ children, className }) => {
  return (
    <aside
      className={`bg-sidebar h-[100vw] flex flex-shrink-0  flex-col p-6  ${className}`}
    >
      {children}
    </aside>
  );
};

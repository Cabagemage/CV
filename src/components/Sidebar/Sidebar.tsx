import type { ReactNode } from "react";

type SideBarProps = {
  children: ReactNode | Array<ReactNode>;
  className?: string;
};

export function SideBar({ children, className }: SideBarProps) {
  return (
    <aside
      className={`bg-sidebar h-[100vw] flex flex-shrink-0  flex-col p-6 rounded-tr-[16px] ${className}`}
    >
      {children}
    </aside>
  );
}

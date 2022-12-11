import type { FC } from "react";
import type { ContactsProps } from "./Contacts.typedef";
import Contact from "../../ui/Contact";
import SideBarBlockTitle from "../../ui/SideBarBlockTitle";

export const Contacts: FC<ContactsProps> = ({ contacts }) => (
  <div className="flex flex-col gap-4  justify-center items-start mt-8">
    <SideBarBlockTitle text="<Контакты />" />
    <div className="flex gap-4 flex-col w-[100%]">
      {contacts.map((item) => (
        <Contact
          key={item.text}
          text={item.text}
          iconSrc={item.iconSrc}
          theme={item.theme}
          link={item.link}
        />
      ))}
    </div>
  </div>
);

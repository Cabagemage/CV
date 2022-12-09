import type { FC } from "react";
import type { ContactsProps } from "./Contacts.typedef";
import { Contact, SideBarBlockTitle } from "../../ui";
import "./Contacts.css";

export const Contacts: FC<ContactsProps> = ({ contacts }) => (
  <div className="flex flex-col gap-4  justify-center items-start mt-8">
    <SideBarBlockTitle text="<Контакты />" />
    <div className="flex flex-wrap gap-4">
      {contacts.map((item) => (
        <Contact
          text={item.text}
          iconSrc={item.iconSrc}
          theme={item.theme}
          link={item.link}
        />
      ))}
    </div>
  </div>
);

import type { FC } from "react";
import type { ContactsProps } from "./Contacts.typedef";
import { Contact, TypeWriter } from "../../ui";
import "./Contacts.css";

export const Contacts: FC<ContactsProps> = ({ contacts }) => (
  <div className="flex flex-col gap-4  justify-center items-start mt-8">
    <TypeWriter
      className="text-2xl w-[100%] text-white font-bold"
      text="<Контакты </>"
    />
    {contacts.map((item) => (
      <Contact
        text={item.text}
        iconSrc={item.iconSrc}
        theme={item.theme}
        link={item.link}
      />
    ))}
  </div>
);

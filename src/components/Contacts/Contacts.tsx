import type { FC } from "react";
import type { ContactsProps } from "./Contacts.typedef";
import { Contact, TypeWriter } from "../../ui";
import "./Contacts.css"
import type { ContactProps } from "../../ui/Contact/Contact.typedef";
import git from "./social-networks/github.svg";
import mail from "./social-networks/mail.svg";
import linkedin from "./social-networks/linkedin.svg";

const contacts: Array<ContactProps> = [
    { text: "Github", link: "https://github.com/Cabagemage", iconSrc: git, theme: "github" },
    { text: "Email", link: "scootaloorainbow@yandex.ru", iconSrc: mail, theme: "mail" },
    { text: "Linkedin", link: "https://www.linkedin.com/in/cabagemage/", iconSrc: linkedin, theme: "linkedin" },
]
export const Contacts: FC<ContactsProps> = () => {

    return (
        <div className="flex flex-col gap-4  justify-center items-start mt-8">
            <TypeWriter className="text-2xl w-[100%] text-white font-bold" text="<Контакты </>" />
            {contacts.map((item) => {
                return <Contact {...item} />
            })}
        </div>
    )
}

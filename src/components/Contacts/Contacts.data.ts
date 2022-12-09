import type { ContactProps } from "../../ui/Contact/Contact.typedef";
import git from "./social-networks/github.svg";
import mail from "./social-networks/mail.svg";
import linkedin from "./social-networks/linkedin.svg";

export const contacts: Array<ContactProps> = [
  {
    text: "Github",
    link: "https://github.com/Cabagemage",
    iconSrc: git,
    theme: "github",
  },
  {
    text: "Email",
    link: "scootaloorainbow@yandex.ru",
    iconSrc: mail,
    theme: "mail",
  },
  {
    text: "Linkedin",
    link: "https://www.linkedin.com/in/cabagemage/",
    iconSrc: linkedin,
    theme: "linkedin",
  },
];

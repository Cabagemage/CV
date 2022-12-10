import type { ContactProps } from "../../ui/Contact/Contact.typedef";
import git from "../../static/icons/social-networks/github.svg";
import linkedin from "../../static/icons/social-networks/linkedin.svg";

export const contacts: Array<ContactProps> = [
  {
    text: "Github",
    link: "https://github.com/Cabagemage",
    iconSrc: git,
    theme: "github",
  },
  {
    text: "Linkedin",
    link: "https://www.linkedin.com/in/cabagemage/",
    iconSrc: linkedin,
    theme: "linkedin",
  },
];

type SocialNetworkType = "mail" | "linkedin" | "github";

export type ContactProps = {
  iconSrc: string;
  text: string;
  theme: SocialNetworkType;
  link: string;
};

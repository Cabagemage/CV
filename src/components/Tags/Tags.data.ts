import type { Theme } from "../../ui/Tag/Tag.typedef";
import type { TagsWithoutTheme } from "./Tags.typedef";

export const themes: Array<keyof Theme> = [
  "green",
  "orange",
  "lightBlue",
  "darkGreen",
  "darkGreen",
  "grey",
  "white",
  "sazerac",
  "lightPink",
  "pink",
];

export const tools: TagsWithoutTheme = [
  { text: "Sentry", srcLink: "https://sentry.org" },
  { text: "Github", srcLink: "https://github.com" },
  { text: "Storybook", srcLink: "https://storybook.js.org/" },
  { text: "TypeScript", srcLink: "https://www.typescriptlang.org/" },
  { text: "HTML 5", srcLink: "https://www.w3.org/TR/2011/WD-html5-20110405/" },
  { text: "Node.js", srcLink: "https://nodejs.org/en/" },
  { text: "Astro", srcLink: "https://astro.build/" },
  { text: "Next.js", srcLink: "https://nextjs.org/" },
  {
    text: "JavaScript",
    srcLink:
      "https://www.ecma-international.org/publications-and-standards/standards/ecma-262/",
  },
  { text: "Tailwind", srcLink: "https://tailwindcss.com/" },
  { text: "Hygen", srcLink: "https://www.hygen.io/" },
  { text: "Docker", srcLink: "https://docker.com" },
];

export const industryKnowledge: TagsWithoutTheme = [
  { text: "SSR/SPA" },
  { text: "HTTP" },
  { text: "OOP" },
  { text: "UX" },
  { text: "UI" },
  { text: "Design Patterns" },
];

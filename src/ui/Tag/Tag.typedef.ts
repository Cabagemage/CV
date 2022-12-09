export type Theme = {
  white: "#FFF";
  pink: "#FFD8D8";
  green: "#63DD8C";
  salad: "#CBFAAF";
  darkYellow: "#EFFFC0";
  lightBlue: "#D2FFFF";
  darkGreen: "#8FD664";
  orange: "#FFC875";
  lightPink: "#ECC7EF";
  sazerac: "#F9EAD5";
  grey: "#BBADAD";
  sidebar: "#454444";
};

// divide component props and used data into this one.
export type TagData = {
  theme: keyof Theme;
  text: string;
  srcLink?: string;
};

export type TagProps = TagData;

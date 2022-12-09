/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}"],
  theme: {
    colors: {
      white: "#FFF",
      pink: "#FFD8D8",
      green: "#63DD8C",
      salad: "#CBFAAF",
      lightBlue: "#D2FFFF",
      darkGreen: "#8FD664",
      orange: "#FFC875",
      darkYellow: "#EFFFC0",
      lightPink: "#ECC7EF",
      sazerac: "#F9EAD5",
      grey: "#BBADAD",
    },
    backgroundColor: {
      white: "#FFF",
      pink: "#FFD8D8",
      green: "#63DD8C",
      salad: "#CBFAAF",
      darkYellow: "#EFFFC0",
      lightBlue: "#D2FFFF",
      darkGreen: "#8FD664",
      orange: "#FFC875",
      lightPink: "#ECC7EF",
      sazerac: "#F9EAD5",
      grey: "#BBADAD",
      sidebar: "#454444",
    },
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      lineHeight: {
        1.1: "1.1",
        1.2: "1.2",
        1.4: "1.4",
        1.5: "1.5",
        1.6: "1.6",
      },
      spacing: {
        1: "4px",
        10: "40px",
        2: "8px",
        3: "12px",
        4: "16px",
        5: "20px",
        6: "24px",
        7: "28px",
        8: "32px",
        9: "36px",
      },
      fontSize: {
        "2xl": "24px",
        l: "18px",
        m: "16px",
        s: "14px",
        xl: "20px",
        xs: "12px",
      },
      screens: {
        desktop: "1240px",
        smallMobile: { max: "375px" },
        tablet: { max: "1239px", min: "376px" },
      },
    },
  },
  plugins: [],
};
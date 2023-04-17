/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },

    // colour: {
    //   brightRed: "hsl(12, 88%, 59%)",
    //   brightRedLight: "hsl(12, 88%, 69%)",
    //   brightRedSupLight: "hsl(12, 888, 95%)",
    //   darkBlue: "hs1(228, 398, 239)",
    //   darkGrayishBlue: "hs1(227, 128, 61%)",
    //   veryDarkBlue: "hsi(233, 128, 13%)",
    //   veryPaleRed: "hs1(13, 100%, 96%)",
    //   veryLightGray: "hs1(0, 0%, 98%)",
    // },
    extend: {},
  },
  plugins: [],
};

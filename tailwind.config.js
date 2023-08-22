const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{svelte,js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Ubuntu", ...defaultTheme.fontFamily.sans],
        display: ["Almarai"],
      },
      colors: {
        accent: colors.green,
      },
    },
  },
};

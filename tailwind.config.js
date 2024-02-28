/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "400px",
      s: "680px",
      lg: "1020px",
    },
    extend: {
      colors: {
        "gray-242": "#F2F2F2",
        "gray-112": "#707070",
        "red-255": "#FF372D",
        "red-253": "#fdc9c4",
        "red-218": "#DA291C",
      },
      backgroundColor: {
        "gray-240": "#F4F7FB",
        "gray-239": "#EFEFEF",
      },
      width: {
        490: "30.6rem",
      },
      padding: { 456: "28.5rem" },
    },
  },
  plugins: [],
};

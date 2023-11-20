/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      width: {
        mob: "375px",
        "mob-inside": "335px",
        desktop: "1440px",
        "desktop-inside": "1376px",
      },
      colors: {
        primary: "#FFFFFF",
        border: {
          "bottom-color": "#3A3940",
        },
        button: {
          "primary-background": "#523FD7",
        },
      },
    },
  },
  plugins: [],
};

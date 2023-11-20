/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "375px",
      md: "745px",
      lg: "1728px",
      xl: "1440px",
    },
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
          divider: "#3A3940",
        },
        button: {
          "primary-background": "#523FD7",
        },
        home: {
          "bottom-nav": "#09090D",
        },
        gray: {
          300: "#616066",
        },
      },
      borderRadius: {
        button: "32px",
      },
    },
  },
  plugins: [],
};

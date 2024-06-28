module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        primary: {
          green: "hsl(75, 94%, 57%)",
        },
        neutral: {
          white: "hsl(0, 0%, 100%)",
          grey: "hsl(0, 0%, 20%)",
          "dark-grey": "hsl(0, 0%, 12%)",
          "off-black": "hsl(0, 0%, 8%)",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

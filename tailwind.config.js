module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["Poppins"],
      },
      colors: {
        main: "#161824",
        secondary: "#F9BF3B",
        card: "#1F212E",
      },
      zIndex: {
        "-1": "-1",
      },
      backgroundImage: (theme) => ({
        "hero-smansa": "url('./img/hero.svg')",
      }),
    },
  },
  variants: {
    extend: {
      display: ["group-hover"],
      transitionProperty: ["group-hover"],
    },
  },
  plugins: [],
};

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
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

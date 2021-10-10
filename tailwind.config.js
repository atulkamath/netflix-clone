module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        //sans: ['Martel Sans']
      },
      backgroundImage: {
        banner: "url('/banner.jpg')",
      },
      height: {
        "50v": "50vh",
        "60v": "60vh",
        "70v": "70vh",
        "80v": "80vh",
      },
      width: {
        98: "30rem",
      },
      weight: {
        "90v": "90vw",
      },
      colors: {
        "actual-gray": "#333333",
      },
    },
  },
  variants: {
    extend: {
      div: ["odd"],
    },
  },
  plugins: [],
};

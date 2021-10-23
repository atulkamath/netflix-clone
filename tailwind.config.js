module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'

  theme: {
    extend: {
      dropShadow: {
        "3xl": "1px 1px 6px rgba(0, 0, 0,1)",
      },
      maxWidth: {
        "1/4": "25%",
        "1/2": "50%",
        "3/4": "75%",
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
      padding: {
        56: "56.25%",
      },
      width: {
        98: "30rem",
      },
      weight: {
        "40v": "40vw",
        "90v": "90vw",
      },
      colors: {
        "actual-gray": "#333333",
        "light-black": "rgba(0,0,0,0.7)",
        "netflix-red": "rgb(227	12	19)",
      },
    },
  },
  variants: {
    extend: {
      div: ["even"],
      p: ["even"],
      div: ["odd"],
    },
  },
  plugins: [],
};

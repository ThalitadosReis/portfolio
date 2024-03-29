module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      primary: "Poppins",
    },
    container: {
      padding: {
        DEFAULT: "15px",
      },
    },
    screens: {
      sm: "576px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      colors: {
        primary: "#000",
        accent: "#555555",
      },
      backgroundImage: {
        banner: "url('./assets/banner.png')",
        about: "url('./assets/about.jpeg')",
      },
    },
  },
  plugins: [],
};

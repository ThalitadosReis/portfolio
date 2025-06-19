module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      kanit: ["Kanit", "sans-serif"],
      newyork: ["NewYork", "sans-serif"],
    },
    container: {
      padding: {
        DEFAULT: "25px",
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
        "soft-gray": "#f6f5f4",
        "neutral-light": "#ecebea",
        "off-white": "#fffffe",
      },
      backgroundImage: {
        banner: "url('./assets/images/banner.jpg')",
      },
    },
  },
  plugins: [],
};

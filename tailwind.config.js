const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        shake: 'shake 350ms ease-in-out',
      },
      keyframes: {
        shake: {
          "0%": { transform: "translateX(0)" },
          "25%": { transform: "translateX(4px)" },
          "50%": { transform: "translateX(-3px)" },
          "75%": { transform: "translateX(2px)" },
          "100%": { transform: "translateX(0)" },
        },
      },
    },
    boxShadow: {
      default: "0 0 0.20em 0 #0abdc6, inset 0 0 0.20em 0 #0abdc6",
      hover: "0 0 0.40em 0 #0abdc6, inset 0 0 0.40em 0 #0abdc6",
    },
    colors: {
      ...colors,
      "game-light-blue": "#0abdc6",
      "game-dark-blue": "#133e7c",
      "game-dark": "#091833",
      "game-purple": "#441B68",
      "game-pink": "#A115BA",
    },
    screens: {
      sm: "1px",
      md: "768px",
      lg: "1030px",
      xl: "1280px",
      xxl: "1440px",
    },
  },
  plugins: [],
};

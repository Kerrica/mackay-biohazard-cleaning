import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["Arial Black", "Arial", "sans-serif"],
      },
      colors: {
        brand: {
          navy: "#0f2230",
          teal: "#2d99b3",
          red: "#ef4f45",
          bg: "#eef3f4",
        },
      },
    },
  },
  plugins: [],
};

export default config;

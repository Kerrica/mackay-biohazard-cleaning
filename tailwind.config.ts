import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Arial Black", "Arial", "sans-serif"]
      },
      colors: {
        brand: {
          teal: "#2d99b3"
        }
      }
    }
  },
  plugins: []
};

export default config;

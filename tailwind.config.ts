import type { Config } from "tailwindcss";
import flowbite from "flowbite/plugin";

const config: Config = {
  content: [
    "./node_modules/flowbite-react/lib/**/*.js",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "custom-gradient-one":
          "linear-gradient(0deg, rgba(108,110,240,1) 23%, rgba(25,219,202,1) 90%)",
        "custom-gradient-two":
          "linear-gradient(0deg, rgba(108,110,240,1) 46%, rgba(25,219,202,1) 114%)",
        "custom-gradient-three":
          "linear-gradient(0deg, rgba(108,110,240,1) 86%, rgba(25,219,202,1) 106%)",
        "custom-gradient-four":
          "linear-gradient(0deg, rgba(108,110,240,1) 0%, rgba(25,219,202,1) 75%)",
        "custom-gradient-five":
          "linear-gradient(0deg, rgba(108,110,240,1) 50%, rgba(25,219,202,1) 140%)",
        "custom-gradient-six":
          "linear-gradient(0deg, rgba(108,110,240,1) 20%, rgba(25,219,202,1) 100%)",
        "custom-gradient-seven":
          "linear-gradient(0deg, rgba(108,110,240,1) 58%, rgba(25,219,202,1) 130%)",
        "custom-gradient-eight":
          "linear-gradient(0deg, rgba(108,110,240,1) 89%, rgba(25,219,202,1) 122%)",
        "hero-insides":
          "radial-gradient(circle, rgba(118, 89, 194, 0.24) 35%, rgba(35, 0, 124, 0.22) 100%)",
        "cards-producs":
          "linear-gradient(180deg, rgba(153,153,153,0) 0%, rgba(153,153,153,0.2049413515406162) 100%)",
        "card-service":
          "linear-gradient(180deg, rgba(153,153,153,0) 0%, rgba(255,255,255, 0.25) 100%)",
        "custom-client-gradian-title":
          "linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(240,202,251,1) 47%, rgba(255,255,255,1) 100%)",
        "custom-gradian-btn-project":
          "linear-gradient(141deg, rgba(153,90,240,1) 0%, rgba(109,12,188,1) 100%)",
      },
      fontFamily: {
        grandis: ["var(--font-grandis)"],
        futura: ["var(--font-futura)"],
      },
      fontSize: {
        // "hero-title": "4rem",
        "hero-subtitle": "2.4rem",
      },
      colors: {
        "inside-purple": "#AFB0FF",
        "inside-green": "#19DBCA",
      },
    },
  },
  plugins: [flowbite],
};
export default config;

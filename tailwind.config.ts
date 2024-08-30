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
        "gradient-purple":
          "linear-gradient(180deg, rgba(14,3,42,1) 20%, rgba(14,3,42,0) 100%)",
        "gradient-gray-blue":
          "linear-gradient(180deg, rgba(40,45,69,1) 45%, rgba(40,45,69,0) 100%)",
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
        "title-1": "91px",
        "title-2": "88px",
        "title-3": "69px",
        "title-4": "66px",
        "title-5": "65px",
        "title-6": "55px",
        "title-7": "42px",
        "title-8": "40px",

        big: "30px",
        large: "25px",
        medium: "22px",
        base: "20px",
        small: "18px",
        tiny: "16px",
        petite: "14px",
        micro: "12px",
        nano: "10px",
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

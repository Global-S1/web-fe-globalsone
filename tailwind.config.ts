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
        "gradiant-title-1":
          "linear-gradient(358deg, #6C6EF0 44.08%, #19DBCA 80.64%)",
        "gradiant-title-2":
          " linear-gradient(2deg, #6C6EF0 73.64%, #19DBCA 98.04%)",
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
          "radial-gradient(circle, rgba(118,89,194,1) 22%, rgba(35,0,124,1) 100%)",
        "cards-producs":
          "linear-gradient(180deg, rgba(153,153,153,0) 0%, rgba(153,153,153,0.2049413515406162) 100%)",
        "card-service":
          "linear-gradient(180deg, rgba(153,153,153,0) 0%, rgba(255,255,255, 0.25) 100%)",
        "custom-client-gradian-title":
          "linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(240,202,251,1) 47%, rgba(255,255,255,1) 100%)",
        "custom-gradian-btn-project":
          "linear-gradient(141deg, rgba(153,90,240,1) 0%, rgba(109,12,188,1) 100%)",
        "radial-gradient-arrow-chatbot":
          "radial-gradient(circle, #204B6B, transparent)",
      },
      fontFamily: {
        grandis: ["var(--font-grandis)"],
        futura: ["Futura", "var(--font-futura)", "sans-serif"],
        urbanist: ["var(--font-urbanist)"],
      },
      fontSize: {
        "title-1": "91px",
        "title-2": "88px",
        "title-3": "84px",
        "title-4": "69px",
        "title-5": "66px",
        "title-6": "65px",
        "title-7": "55px",
        "title-8": "42px",
        "title-9": "40px",
        "title-10": "36px",

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

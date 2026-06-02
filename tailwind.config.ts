import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#17211f",
        paper: "#f7f4ec",
        moss: "#52695f",
        clay: "#b46a55",
        wheat: "#ead8a8"
      },
      boxShadow: {
        soft: "0 18px 55px rgba(23, 33, 31, 0.12)"
      }
    }
  },
  plugins: []
};

export default config;

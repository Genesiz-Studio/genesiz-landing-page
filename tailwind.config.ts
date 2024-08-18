import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./layouts/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#82C708",
      },
      fontFamily: {
        font_warface: ["Font-Warfare", "sans-serif"],
      },
      backgroundImage: {},
      boxShadow: {
        primary: `0px 4px 12px 0px #82C70840 inset, 0px -4px 12px 0px #82C70840 inset`,
        card: `0px 8px 32px 0px #82C7088C`,
      },
    },
  },
  plugins: [],
};
export default config;

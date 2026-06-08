import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        background: "#050816",
        primary: "#00FFFF",
        secondary: "#7C3AED",
        accent: "#14F195",
        text: "#FFFFFF",
        muted: "#94A3B8",
      },
      fontFamily: {
        body: ["var(--font-body)", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 60px rgba(0, 255, 255, 0.18)",
      },
      backgroundImage: {
        aurora:
          "radial-gradient(circle at top left, rgba(124,58,237,0.18), transparent 28%), radial-gradient(circle at top right, rgba(0,255,255,0.14), transparent 24%), linear-gradient(180deg, #050816 0%, #040711 55%, #02040b 100%)",
      },
    },
  },
  plugins: [],
};

export default config;


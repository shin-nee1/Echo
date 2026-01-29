import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

const config: Config = {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        border: "hsl(var(--border))",
        cyan: "hsl(var(--cyan))",
        primary: "hsl(var(--primary))",
        // Adding the exact footer/hero background color from your image
        brand: {
          dark: "#020c12", 
          glow: "#00e5ff",
        },
        muted: {
          foreground: "hsl(var(--muted-foreground))",
        },
      },
      keyframes: {
        // The "Up and Down" animation from your video
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-slow": "float-slow 8s ease-in-out infinite",
      },
    },
  },
  plugins: [animate],
};

export default config;
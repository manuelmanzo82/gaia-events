import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Tuscan Elegance Design System
        ivory: "#FAF8F5",
        beige: "#E8E2D9",
        sage: "#8B9A7D",
        bordeaux: "#722F37",
        gold: "#C9A962",
        charcoal: "#2D2D2D",
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Cormorant Garamond", "serif"],
        sans: ["var(--font-montserrat)", "Montserrat", "sans-serif"],
      },
      backgroundImage: {
        "gradient-gold": "linear-gradient(135deg, #C9A962 0%, #E8D5A3 50%, #C9A962 100%)",
      },
    },
  },
  plugins: [],
};

export default config;

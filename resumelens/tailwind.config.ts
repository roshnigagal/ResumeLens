import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#10263f",
        brand: { 50: "#f2f8ff", 100: "#e2efff", 200: "#c4dcfb", 500: "#3b8bea", 600: "#2272d9", 700: "#1b5bb0" },
      },
      fontFamily: { sans: ["Inter", "ui-sans-serif", "system-ui", "-apple-system", "Segoe UI", "sans-serif"] },
    },
  },
  plugins: [],
};
export default config;

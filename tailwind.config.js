/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        intacle: {
          black: "#050505",
          panel: "#0b0d10",
          blue: "#0b66ff",
          cyan: "#46d9ff",
          line: "rgba(255,255,255,0.12)",
        },
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif",
        ],
      },
      boxShadow: {
        blue: "0 24px 80px rgba(11,102,255,0.28)",
        premium: "0 26px 90px rgba(0,0,0,0.35)",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}", "./context/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        accent: "#c2f800", // tags, badges, nav (Figma)
        cta: "#ccff00", // primary CTA buttons (Figma / brief)
        bg: "#0f1115",
        card: "#15171d",
        line: "#222630",
      },
      fontFamily: {
        display: ["Oswald", "Impact", "sans-serif"],
        body: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        "navy-blue": "#0f172a",
        "dark-blue": "#1e293b",
        slate: "#334155",
        "electric-purple": "#c084fc",
        "royal-purple": "#9333ea",
        amethyst: "#7e22ce"
      }
    },
  },
  plugins: [],
}


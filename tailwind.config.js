// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
  safelist: [
    "animate-float",
    "animate-float-slow",
    "blob-shape",
    "passions-conflict-regular",
  ],
};

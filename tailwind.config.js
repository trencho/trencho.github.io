/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html", // Ensure this matches the location of your HTML file
    "./src/**/*.{js,ts,jsx,tsx}", // This covers all JS, TS, JSX, and TSX files in your src directory
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

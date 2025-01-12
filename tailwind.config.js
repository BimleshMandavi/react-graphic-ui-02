/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        ubuntu: ["Ubuntu", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
        sans: ["sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};

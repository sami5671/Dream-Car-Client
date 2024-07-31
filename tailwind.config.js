/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto Slab", "serif"],
        play: ["Playfair Display", "serif"],
      },
    },
  },
  plugins: [require("daisyui")],
};

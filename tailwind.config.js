/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "red-background": "#993025",
        "pink-background": "#E54D41",
        "orange-background": "#e96d1b",
      },
    },
  },
  plugins: [],
};

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
        "red-dark-text": "#631B07",
        "grey-text": "#505050",
        "light-pink-bg": "#FFF2F2",
        "light-blue-bg": "#E2F3FF",
        "light-purple-bg": "#F1E8FF",
      },
      fontFamily: {
        body: ["Proxima Nova"],
        proximaNova: ["Proxima Nova"],
      },
    },
  },
  plugins: [],
};

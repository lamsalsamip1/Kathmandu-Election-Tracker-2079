/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./components/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "dark-blue": "#141E61",
        "light-grey": "#F6F5F5",
        "cust-grey": "#F1F6F9",
        "light-black": "#413F42",
        "light-green": "#16A596",
        "elected-green": "#d4fad4",
        "light-yellow": "#FFC069",
      },
    },
  },
  plugins: [],
};

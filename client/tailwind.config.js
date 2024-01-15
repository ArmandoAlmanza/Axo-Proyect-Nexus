/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        body: "rgba(221,221,221, 0.87)",
        purple: "rgba(202, 3, 252, 0.3)",
      },
    },
  },
  plugins: [],
};

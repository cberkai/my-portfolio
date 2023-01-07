/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        passion: ["Great Vibes", "cursive"],
        ubuntu: ["Ubuntu", "sans-serif"],
        pass: ["Playfair Display", " serif"],
        contes: ["Sevillana", "cursive"],
        open: ["Open Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};

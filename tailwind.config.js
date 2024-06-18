/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#bbb2e3",
        secondary: "#2a2639",
        gradient: '#3A3456',
        gradient2: '#211E2E',
      }
    },
  },
  plugins: [],
}
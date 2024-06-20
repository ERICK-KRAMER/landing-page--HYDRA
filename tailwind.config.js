/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'radial-gradient': 'radial-gradient(circle, var(--tw-gradient-stops))',
      },
      colors: {
        primary: "#bbb2e3",
        secondary: "#2a2639",
        gradient: '#3A3456',
        gradient2: '#211E2E',
        gradient3: '#302C42'
      }
    },
  },
  plugins: [],
}
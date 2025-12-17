/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'serif': ['Georgia', 'serif'],
      },
      colors: {
        'buffet-dark': '#4A2C17',
        'buffet-mid': '#6D4023',
        'buffet-light': '#8B5A3C',
        'copper': '#B87333',
        'copper-light': '#DA8A67',
        'copper-dark': '#8B5A2B',
        'cream': '#FFF8DC',
        'cream-warm': '#FAEBD7',
        'terracotta': '#CC5533',
        'wine': '#722F37',
      },
    },
  },
  plugins: [],
}

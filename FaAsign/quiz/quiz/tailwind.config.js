/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main-purple': '#A5B4FC',
        'navy-hover': '#312E81',
        'red-incorrect': '#EF4444',
        'green-correct': '#10B981',
        'green-light-button' : 'rgba(110,231,183)',
        'gray-button': '#6B7280',
        'yellow-button': '#F59E0B',
        'navy-light': 'rgba(67,56,202)'
      }
    },
  },
  plugins: [],
}


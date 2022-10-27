/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'rubik': ['Rubik', 'sans-serif']
      },
      colors: {
        'gray': 'hsl(0, 0%, 59%)',
        'dark-gray': 'hsl(0, 0%, 17%)'
      }
    },
  },
  plugins: [],
}

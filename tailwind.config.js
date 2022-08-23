/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'Soft-blue':'#5368df',
        'Soft-red':'#fa5757',
        'Grayish-blue':'#9194a1',
        'Very-dark-blue':'#252b46',
      },
      fontFamily: {
        'Rubik': "'Rubik', sans- serif;"
      }
    },
  },
  plugins: [],
}

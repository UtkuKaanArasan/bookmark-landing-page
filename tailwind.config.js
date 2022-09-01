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
        'Very-dark-blue': '#252b46',
        'Soft-white':'#FAFAFA'
      },
      fontFamily: {
        'Rubik': "'Rubik', sans- serif;"
      },
      // to fix the hover stuck on mobile devices
      screens: {
        'hover-hover': { 'raw': '(hover: hover)' },
        'hover-none': {'raw': '(hover: none)'}
      },
    },
  },
  plugins: [],
}

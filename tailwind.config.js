/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      // Extra-large breakpoints for ultrawide / 4K screens
      screens: {
        '3xl': '1920px',
        '4xl': '2560px'
      }
    }
  },
  plugins: []
};
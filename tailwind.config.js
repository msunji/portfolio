const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui', 'Helvetica Neue', 'sans-serif'],
      'mono': ['ui-monospace', 'Monaco', 'monospace'],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

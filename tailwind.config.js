const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      yellow: colors.amber,
      gray: colors.coolGray,
    },
    fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui', 'Helvetica Neue', 'sans-serif'],
      'mono': ['ui-monospace', "Liberation Mono", 'monospace'],
    },
    extend: {
      textColor: ['visited'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

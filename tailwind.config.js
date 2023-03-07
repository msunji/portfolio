const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    // Example content paths...
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      primary: colors.emerald,
    },
    fontFamily: {
      'sans': ['Archivo','ui-sans-serif', 'system-ui', 'Helvetica Neue', 'sans-serif'],
      'mono': ['ui-monospace', "Liberation Mono", 'monospace'],
    },
    extend: {
      textColor: ['visited'],
    },
  },
  plugins: [],
}

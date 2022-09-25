/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    fontFamily: {
      montserrat: ['Montserrat', 'sans-serif']
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      black: '#000000',
      gray: {
        cod: '#121212',
        silver: '#aaaaaa'
      }
    },
    backgroundColor: theme => ({
      ...theme('colors')
    }),
    extend: {}
  },
  plugins: []
}

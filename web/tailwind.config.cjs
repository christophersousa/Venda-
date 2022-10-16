/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    './index.html'
  ],
  theme: {
    fontFamily:{
      sans:['Inter', 'sans-serif']
    },
    extend: {
      backgroundImage:{
      },
      backgroundColor:{
        'background': '#F0F0F0',
        'background-gray':'#D9D9D9',
        'background-orange':'#F34401'
      },
      colors:{
        'color-gray': '#D9D9D9',
        'color-gray-text': '#5B5B5B',
      },
    }
  },
  plugins: [],
}

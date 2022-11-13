/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: [
    './src/**/*.tsx',
    './index.html',
    './node_modules/tw-elements/dist/js/**/*.js'
  ],
  theme: {
    fontFamily:{
      sans:['Inter', 'sans-serif']
    },
    extend: {
      backgroundImage:{
        'slide1' : 'url("https://www.fatosdesconhecidos.com.br/wp-content/uploads/2018/03/o-SMARTPHONE-facebook-1600x800.jpg")',
        'slide2' : 'url("https://img.freepik.com/fotos-premium/familia-sorridente-sentado-no-sofa-e-apontando-para-tablet-digital_107420-39210.jpg?w=2000")',
        'slide3' : 'url("https://cdn.create.vista.com/api/media/medium/265127828/stock-photo-father-son-playing-video-game?token=")'
      },
      backgroundColor:{
        'background': '#F0F0F0',
        'background-gray':'#D9D9D9',
        'background-orange':'#F34401',
        'background-secundary': '#AFAFAF'
      },
      colors:{
        'color-gray': '#D9D9D9',
        'color-gray-text': '#5B5B5B',
      },
      padding:{
        'padding-container': '1rem 3rem 1rem 3rem'
      },
      margin:{
        'margin-container': '1rem 0 1rem 0'
      },
      border:{
        'background-orange':'#F34401'
      }
    }
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
})
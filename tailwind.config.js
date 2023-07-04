const defaultTheme = require('tailwindcss/defaultTheme');
/** @type {import('tailwindcss').Config} */
module.exports = {
  content:  ["*.{html,js}",
'./index.html'],
  theme: {
  colors: {
      'primary': '#C10044',
      'secondary': '#9F0AC2',
      'tertiary': '#20CCF7',
      'fundo': '#151925',
      'fundo-dark': '#0E0E1A',
      'black': '#000000',
      'white': {
        light: '#c9c9c9',
        DEFAULT: '#ffffff',
        dark: '#9b9b9b',
      },
      'orange': {
        DEFAULT: '#E52F00',
        dark: '#E82300'
      },
      'blue': '#0077E5',
      'yellow': '#E5CE00',
      'green': '#00E57F',
    },
    container: {
      center: true,
      screens: {
        sm: '600px',
        md: '728px',
        lg: '984px',
        xl: '1040px',
      },
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },


  
  },
  plugins: [
  
    function ({ addComponents }) {
        addComponents({
            '.container': {
                maxWidth: '100%',
                '@screen sm': {
                    maxWidth: '640px',
                },
                '@screen md': {
                    maxWidth: '768px',
                },
                '@screen lg': {
                    maxWidth: '1024px',
                },
                '@screen xl': {
                    maxWidth: '1180px',
                },
            },

        })
    }
],
}

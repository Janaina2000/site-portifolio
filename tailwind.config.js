const defaultTheme = require('tailwindcss/defaultTheme');
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
   
    './src/**/*.{html,js,scss}' // Ajuste conforme o local dos seus arquivos
   
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#C10044',
          light: '#D63A5E',
          dark: '#90002D',
        },
        secondary: {
          DEFAULT: '#9F0AC2',
          light: '#C86BCC',
          dark: '#6A058B',
        },
        tertiary: {
          DEFAULT: '#20CCF7',
          light: '#6EE0FF',
          dark: '#1A9ABF',
        },
        fundo: {
          DEFAULT: '#151925',
          dark: '#0E0E1A',
        },
        black: {
          light: '#c9c9c9',
          DEFAULT: '#000000',
          dark: '#9b9b9b',
        },
        white: {
          light: '#c9c9c9',
          DEFAULT: '#ffffff',
          dark: '#9b9b9b',
        },
        orange: {
          DEFAULT: '#E52F00',
          dark: '#E82300',
        },
        blue: '#0077E5',
        yellow: '#E5CE00',
        green: '#00E57F',
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          with: '100%',
          marginLeft: 'auto',
          marginRight: 'auto',
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
      });
    },
  ],
};

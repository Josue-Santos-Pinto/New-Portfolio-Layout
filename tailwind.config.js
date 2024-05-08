import { transform } from 'typescript';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#111111',
        secundary: '#151515'
      },
      keyframes: {
        scrollToLeft: {
          '0%': {transform: 'translateX(0)'},
          '100%': {transform: 'translateX(calc(-48px * 8))'}
        },
        scrollToRight: {
          '0%': {transform: 'translateX(calc(48px * 16)'},
          '100%': {transform: 'translateX(0))'}
        },
      },
      
    },
   
  },
  plugins: [],
}


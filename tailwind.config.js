/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
    colors: {
      'purple': "#5b0017",
      'yellow': "#cc9d2f",
      'blue': "#243054",
      'white': "#ffffff",
      'black': "#000000",
      'gray': "#f5f5f5",
      'transparent': "transparent"
      
    },
    fontFamily: {
      'narrow': ['Archivo Narrow', 'sans-serif'],
      'rubik': ['Rubik', 'sans-serif'],
    },
    keyframes: {
      ring: {
        '0%': { transform: 'rotate(0deg)' },
        '10%': { transform: 'rotate(5deg)' },
        '20%': { transform: 'rotate(-5deg)' },
        '30%': { transform: 'rotate(4deg)' },
        '40%': { transform: 'rotate(-4deg)' },
        '50%': { transform: 'rotate(2deg)' },
        '60%': { transform: 'rotate(-2deg)' },
        '100%': { transform: 'rotate(0deg)' },
      },
    },
    animation: {
      ring: 'ring 0.5s ease-in-out infinite',
    },
  },
  },
  plugins: [],
}
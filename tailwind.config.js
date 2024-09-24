/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  darkMode:'class',
  theme: {
    container: {
      center: true, 
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      }
    },

    extend: {
      fontFamily: {
        gemunu: ['Gemunu Libre', 'sans-serif'],
        open: ['Open Sans', 'sans-serif'],
      },
      colors: {
        'ene-red':'red',
        'ene-yellow': 'orange',
        'ene-grey' : 'grey',
        'ene-white': 'white',
      },
      spacing: {
        '128': "31rem",
      }
    },
  },
  plugins: [],
}


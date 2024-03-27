/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors:{
      light: '#dcf4f4',
      main: '#345484',
      dark: '#040434',
      ldark: '#84ccdc',
      'blue-to-blue': 'linear-gradient(241deg, #309A6D 22.4%, #7DC767 69.51%, #F9F952 95.88%)'
    }
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      height: {
        '128': '10vh',
        '60': '60vh'
      },
      translate: {
        '4.25': '-50%',
        '5.2': '-3px'
      },
      
     
    },
  },
  plugins: [],
}


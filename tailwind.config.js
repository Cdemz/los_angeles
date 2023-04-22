/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage :{
        '01pics' : "url('/src/images/01 bg.png')"
      }
    },
  },
  plugins: [],
}


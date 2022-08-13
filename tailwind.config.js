/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/index.html'],
  theme: {
    extend: {
      fontFamily: {
        'jakarta': ['Plus Jakarta Sans'],
      },
      colors:{
        'purpleQR' : '#555E8D',
      },
      backgroundImage:(theme) => ({
        'gradient' : "url('/Gradient1.png')",
      }),
    },
    plugins: [],
  }
}

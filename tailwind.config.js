/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors:{
        'primary-cyan':'hsl(172, 67%, 45%)',
        'primary-cyan-darker':'hsl(183, 100%, 15%)',
        'primary-cyan-dark-gray':'hsl(186, 14%, 43%)',
        'primary-cyan-gray':'hsl(184, 14%, 56%)',
        'primary-cyan-gray-light':'hsl(185, 41%, 84%)',
        'primary-cyan-gray-lighter':'hsl(189, 41%, 97%)'
      }
    },
  },
  plugins: [],
}

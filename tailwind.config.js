/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue'
  ],
  theme: {
    extend: {
      colors: {
        'background-primary': '#202351',
        'background-secondary': '#232252',
        'background-base': '#14113F',
        'color-primary': '#9762FD'
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(90deg, #9762FD 0%, #00B5FC 100%)',
      },
      animation: {
        'type-writter': 'typing 3s steps(40, end)'
      },
      keyframes: {
        'typing': {
          'from': { 'width': '0' },
          'to': { 'width': '100%' }
        }
      }
    },
  },
  plugins: [require('daisyui')],
}

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
      fontFamily: {
        'tomo-main': ['Kanit', 'sans-serif']
      },
      backgroundImage: {
        'texture': "url('~/assets/images/texture.jpg')",
        'texture2': "url('~/assets/images/pattern.svg')"
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

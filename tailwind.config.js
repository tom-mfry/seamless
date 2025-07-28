/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Cousine', 'sans-serif'],
        serif: ['Hello Paris', 'serif'],
      },
      letterSpacing: {
        'ultra': '0.15em',
        'mega': '0.2em',
      },
    },
  },
  plugins: [],
}

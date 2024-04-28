module.exports = {
  extend: {
    colors: {
      'bg-blue': 'rgb(179, 229, 230)'
    }
  },
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

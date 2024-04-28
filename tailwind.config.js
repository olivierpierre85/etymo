module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'custom-blue': 'rgb(179, 229, 230)'
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

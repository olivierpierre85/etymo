module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'custom-blue': 'rgb(179, 229, 230)',
        'custom-dark-blue': '#126d6d'
      },
      fontFamily: {
        urbanist: ['Urbanist', 'sans-serif'],
      },
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

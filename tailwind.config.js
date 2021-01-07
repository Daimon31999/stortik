module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      freckle: ['Freckle Face', 'sans-serif'],
      balsamiq: ['Balsamiq Sans', 'sans-serif'],
    },
    backgroundColor: (theme) => ({
      ...theme('colors'),

      dark: '#06090E',
    }),
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

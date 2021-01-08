module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    listStyleType: {
      none: 'none',
      disc: 'disc',
      decimal: 'decimal',
      square: 'square',
      roman: 'upper-roman',
      circle: 'circle',
    },
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

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      xs: '300px',

      sm: '360px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
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

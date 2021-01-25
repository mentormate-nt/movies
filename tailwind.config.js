const colors = require('tailwindcss/colors');

module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [
    './public/**/*.html',
    './src/**/*.vue'
  ],
  theme: {
    extends: {},
  },
  variants: {},
  plugins: [],
  colors: {
    black: colors.black,
    white: colors.white,
    gray: colors.trueGray,
    indigo: colors.indigo,
    red: colors.rose,
    yellow: colors.amber,
  }
};
const colors = require('./src/tokens/colors');

module.exports = {
  theme: {
    extend: {
      colors,
      boxShadow: {
        outline: '0 0 0 3px rgba(66, 153, 225, 0.5)',
        'outline-primary': '0 0 0 2px hsl(174, 100%, 40%)',
        'outline-danger': '0 0 0 3px hsl(0, 64%, 70%) ',
      },
    },
  },
  variants: {
    backgroundColor: ['hover', 'active', 'focus', 'disabled'],
    textColor: ['hover', 'active', 'focus', 'disabled'],
    opacity: ['disabled'],
    cursor: ['disabled'],
    boxShadow: ['hover', 'disabled', 'focus'],
  },
  plugins: [],
};

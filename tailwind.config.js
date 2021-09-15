module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        darkblue: "#040224",
        lightdarkblue: "#150f54",
        'ligh-dark-blue-opacity': "rgba(21, 15, 84, .7)",
        'Colors-Blue': "#4187f6"

      },
      zIndex: {
        '-10': '-10',
      },
      transitionProperty: {
        'width': 'width',
        'spacing': 'margin, padding',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

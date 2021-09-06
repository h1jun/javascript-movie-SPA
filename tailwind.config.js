module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        '1200': '1200px',
        '90vw': '90vw',
        '60vw': '60vw',
      },
      height: {
        '7vh': '7vh',
        '15vh': '15vh',
        '60vh': '60vh',
        '70vh': '70vh',
        '80vh': '80vh',
      },
      padding: {
        '15vh': '15vh',
      },
      zIndex: {
        '99-': -99,
      },
      grayscale: {
        80: '80%',
      },
      fontSize: {
        '1.3rem': '1.3rem',
        '2rem': '2rem',
        '3rem': '3rem',
       }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

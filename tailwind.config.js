module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        '1200': '1200px',
        '1220': '1220px',
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
        '7vh': '7vh',
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
       },
      maxWidth: {
        '1200': '1200px',
        '1220': '1200px',
      },
      fontFamily: {
        'sans': ['Noto Sans KR', 'sans-serif']
       },
      boxShadow: {
        top: "0 -4px 6px -1px rgba(0, 0, 0, 0.1), 0 -2px 4px -1px rgba(0, 0, 0, 0.06)",
      },
      textColor: {
        'primary': '#222',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

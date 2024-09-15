/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      borderRadius: {
        'custom-tl': '10rem 0 0 0', // Custom top-left border-radius
        'custom-br': '0 0 10rem 0', // Custom top-left border-radius
      },
      fontFamily: {
        sans: ['Roboto', 'ui-sans-serif', 'system-ui'],
      },
      colors: {
        brightRed: '#d84f4f',
        mainColor: '#e8b00d',
        customWhite: 'rgba(255, 255, 255, 0.95)',
        customDark: 'rgba(0, 0, 0, 0.5)',
        customWhiteBrighter: 'rgba(255, 255, 255, 0.95)'
      }
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    }
  },
  plugins: [],
}


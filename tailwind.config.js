/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          0: '#fff',
          100: '#fafafa',
          200: '#eaeaea',
          300: '#999999',
          400: '#888888',
          500: '#666666',
          600: '#444444',
          700: '#333333',
          800: '#222222',
          900: '#111111',
        },
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '100%',
          paddingLeft: 25,
          paddingRight: 25,
          '@screen md': {
            paddingLeft: 40,
            paddingRight: 40,
          },
          '@screen lg': {
            paddingLeft: 0,
            paddingRight: 0,
            maxWidth: '960px',
          },
          '@screen xl': {
            paddingLeft: 0,
            paddingRight: 0,
            maxWidth: '1160px',
          },
        },
      })
    },
  ],
}

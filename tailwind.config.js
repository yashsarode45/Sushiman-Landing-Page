/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      colors: {
        'primary': '#b1454a',
        'secondary': '#121212',
        'black-200': '#020202',
        'black-300': '#333333',
        'black-400': '#1f1e31',
        'black-500': '#555555',
        'gray-100': '#888888',
        'white': '#fff',
        'creamson': '#fff0de',
      },
      fontFamily: {
        'playfair': ['"Playfair Display"', 'serif'],
        'plus-jakarta': ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      flex: {
        '1.236': '1.236 1 0%',
      },
      minHeight: {
        'calc-100vh': 'calc(100vh - 74px)',
      },
    },
  },
  plugins: [],
}


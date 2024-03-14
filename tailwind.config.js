/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{ts,tsx,vue}',
    './components/**/*.{ts,tsx,vue}',
    './app/**/*.{ts,tsx,vue}',
    './src/**/*.{ts,tsx,vue}',
	],
  theme: {
    fontFamily: {
      'sans': ['"Nunito Sans"', 'Arial', '-apple-system', 'BlinkMacSystemFont',],
    },
    extend: {
      borderColor: (theme) => ({
        DEFAULT: theme('colors.gray.300')
      }),
      colors: {
        primary: {
          DEFAULT: '#F58F00',
          light: '#FFBB5C',
        },
      },
    },
  },
}
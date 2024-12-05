// tailwind.config.js
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'cursor-blink': {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 }
        }
      },
      animation: {
        'cursor-blink': 'cursor-blink 1s step-end infinite'
      },
      fontFamily: {
        titles: ['var(--font-caveat)'],
        body: ['var(--font-chewy)'],
      },
      colors: {
        primary: colors.indigo,
        secondary: colors.rose,
      },

    },
  },
  plugins: [],
}
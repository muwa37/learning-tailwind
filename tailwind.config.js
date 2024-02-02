/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'alm-white': 'hsl(0, 0%, 98%)',
        'mid-gray': 'hsl(0, 0%, 41%)',
        'alm-black': 'hsl(0, 0%, 8%)'
      }
    },
    screens: {
      'xl': '1440px',
      'md': '1024px',
    },
  },
  plugins: [],
}


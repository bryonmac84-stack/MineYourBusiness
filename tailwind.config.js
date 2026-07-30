/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        myblack: '#0b0b0b',
        mycard: '#111111',
        mygold: '#D4AF37',
        mybrown: '#6b3f2a',
        mysilver: '#c6c8ca',
        mymuted: '#9ea0a0'
      }
    }
  },
  plugins: []
}

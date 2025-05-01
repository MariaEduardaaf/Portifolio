// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  // habilita dark mode via classe “dark” no <html>
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        background: '#F7F7F7',
      },
    },
  },
  plugins: [],
}

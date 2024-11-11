/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#1197C9',
        'secondary': '#2F4A9D',
        'tertiary': '#019CF8',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'raleway': ['Raleway', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      backgroundImage:{
        'section4': "url('/src/assets/images/section4-img.png')",
      }
    },
  },
  plugins: [],
}
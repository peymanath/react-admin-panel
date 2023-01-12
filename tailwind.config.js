/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["'Vazirmatn'"],
      serif: ["'Vazirmatn'"],
      mono: ["'Vazirmatn'"],
      display: ["'Vazirmatn'"],
      body: ["'Vazirmatn'"],
    },
    extend: {
      container: {
        center: true,
        padding: '1rem'
      },
      colors: {
        primary: '#76EE59',
        headerborder: '#C4C4C4',
        input: '#eee',
        'c-gray': '#1F2D3D',
        'c-red': '#DC3545',
        'c-green': '#28A745',
      },

      animation: {},

      keyframes: {},

    },
  },
  plugins: [],
}

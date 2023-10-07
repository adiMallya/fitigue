/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class',
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      boxShadow: {
        'neumorphic': '0 0 10px #0e7490, 0 -0 10px #0e7490'
      }
    },
  },
  plugins: [],
}


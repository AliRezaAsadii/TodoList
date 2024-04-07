/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        "Nunito": "Nunito",
        "NunitoSemiBold": "Nunito Semibold",
        "MontserratSemiBold": "Montserrat SemiBold"
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1.25rem"
        }
      },
      colors: {
        "emphasis": "#29A19C", //teal-500
        "signature": "#ECCA75", //orange-300
        "delete": "#F05454", //red-500
        "light-bg": "#FAFAFA", //zink-50
        "dark-white": "#F9F9F9", //stone-50
        "dark-bg": "#222831", //Gray-800
        "dark-card": "#2C3440" //Slate-800
      },
      spacing: {
        "3.37": "3.375rem"
      }
    },
  },
  plugins: [],
}


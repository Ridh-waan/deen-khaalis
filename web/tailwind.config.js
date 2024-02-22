/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    fontFamily: {
      Poppins: "Poppins"
    },
    extend: {
      colors: {
        Teal: "#87CEEB",
        HummingBird: "#d1f1ee",
        yellow: "#e4d63b",
        Solitude: "white",
        gray: "#4B4B4C",
        maroon: '#800000',
      },
      zIndex: {
        '1000': '1000',
      },
      backgroundImage: {
        Hero3: "url('Images/Hero3.png')",
      },
      animation: {
        slide: "slide 25s linear infinite"
      },
      keyframes: {
        slide: {
          "0%, 100%": { transform: "translateX(5%)" },
          "50%": { transform: "translateX(-120%)" }
        }
      }
    },
    screens: {
      xs: "480px",
      sm: "760px",
      md: "1060px",
    },
    plugins: [],
  }
}
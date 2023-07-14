/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js"],
  theme: {
    fontFamily: {
      'sans': ['Poppins', 'sans-serif'],
    },
  },

      plugins: [require("daisyui")],
    }

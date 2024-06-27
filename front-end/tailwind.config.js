/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
  theme: {
    fontFamily: {
      kanit: ["Kanit", "sans-serif"],
      lato: ["Lato", "sans-serif"],
      outfit: ["Outfit", "sans-serif"],
      poppins: ["Poppins", "sans-serif"],
      roboto: ["Roboto", "sans-serif"],
      mukta: ["Mukta", "sans-serif"],
      inter: ["Inter", "sans-serif"],
      "chakra-petch": ['"Chakra Petch"', "sans-serif"],
    },
  },
};

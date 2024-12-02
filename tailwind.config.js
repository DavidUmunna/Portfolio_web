
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./**/*.{html,js,ts,jsx,tsx}",
        "./**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        container:{center:true},
      extend: {},
    },
    plugins: [
        require("@tailwindcss/line-clamp")
    ],
  }
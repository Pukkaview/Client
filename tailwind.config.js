/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#800080",
        accent4: "#FFBDFF",
        accent2: "#FF5AFF",
        "text-color": "#FEF",
      },
    },
  },
  plugins: [],
}
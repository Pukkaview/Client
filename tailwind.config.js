/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#800080",
        accent4: "#FFBDFF",
        accent2: "#FF5AFF",
        "text-color": "#FEF",
      },

      backgroundImage: {
        movieCardBg: "url('./assets/Cross.png')",
        ContactImage:
          "linear-gradient(to right bottom,rgba(128, 0, 128, 0.4), rgba(128, 0, 128, 0.4)), url('./assets/ContactImage.png')",
      },
    },
  },
  plugins: [],
};

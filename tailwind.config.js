/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "tv-sm": "1599px",
        "tv-md": "1700px",
        "tv-lg": "1850px",
        "tv-xl": "1950px",
        "tv-xxl": "2100px",
        "desktop-lg": "1440px",
        "phone-lg": "520px",
        "1180": "1180px",
        "1280": "1280px",
        "phone-sm": "400px"
        // => @media (min-width: 1280px) { ... }
      },
      colors: {
        primary: "#800080",
        accent4: "#FFFF",
        accent3: "#FF8CFF",
        accent2: "#FF5AFF",
        accent1: "#C423C4",
        "text-color": "#FEF",
        background: "#0A0A0A",
      },

      backgroundImage: {
        movieCardBg: "url('./assets/Cross.png')",
        contactPattern: "url('./assets/contactPattern.png')",
        HeroBg: "url('./assets/HeroBg.png')",
        ContactImage:
          "linear-gradient(to right bottom,rgba(128, 0, 128, 0.4), rgba(128, 0, 128, 0.4)), url('./assets/ContactImage.png')",
      },
    },
  },
  plugins: [],
};

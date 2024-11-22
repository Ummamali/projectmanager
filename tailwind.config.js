/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        "primary-100": "#443922",
        "primary-200": "#262013",
      },
      maxWidth: {
        application: "1440px",
      },
    },
  },
  plugins: [],
};

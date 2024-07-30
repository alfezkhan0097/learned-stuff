/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        spartan: "League Spartan",
      },
      backgroundImage: {
        homebg: "url(./desktop-image-hero-1.jpg)",
      },
    },
  },
  plugins: [],
};

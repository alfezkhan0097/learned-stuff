/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        overpass : "Overpass",
        ubuntu : "Ubuntu"
      },
      backgroundImage: {
        gradsvg: 'url(./bg-pattern-intro-desktop.svg),linear-gradient(to right, #FF8F71, #FF3E55)',
        mobsvg: 'url(./bg-pattern-intro-mobile.svg),linear-gradient(to right, #FF8F71, #FF3E55)',
        bgone: 'url(./illustration-editor-desktop.svg)',
        cmob: 'url(./illustration-editor-mobile.svg)',
        bgcircle: 'url(./bg-pattern-circles.svg)',
        blaptop: 'url(./illustration-laptop-desktop.svg)',
        blap: 'url(./illustration-laptop-mobile.svg)',
        bgmobile: 'url(./illustration-phones.svg)'
      },
      colors: {
        darkone: 'hsl(208, 49%, 24%)',
        footercol: 'hsl(240, 2%, 79%)',
        footerbg: 'hsl(240, 10%, 16%)',
        bodycol: 'hsl(207, 13%, 34%)'
      }
      
    },
  },
  plugins: [],
}


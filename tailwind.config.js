/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        Primary_Font:['Open Sans', 'system-ui', 'sans-serif']
      },
      colors:{
        Primary:"#429AF8",
        textColor:"#F4F4F5",
      
      },
      backgroundImage: {
        GradientBG: "linear-gradient(to bottom, #151D2C, #0B1018)",
        SectionBg:'linear-gradient(to bottom ,#0B1018,#03060C)'
       
      },
      borderColor:{
        Border_Color: "linear-gradient(to bottom, #F4F4F5, rgba(142, 142, 143, 0))",
      },
       boxShadow: {
        'glow': '0 0 5px #429AF8, 0 0 5px #429AF8, 0 0 5px #429AF8, 0 0 5px #429AF8', // Custom glow shadow
      },
     
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      fontFamily:{
        'Poppins':'Poppins'
      },
      screens:{
        'sm':'640px'
      },
      keyframes:{
        animeProfile:{
          'from':{
            marginTop:'0',
            opacity:'0'
          },
          'to':{
            marginTop:'100px',
            opacity:'1',
          }
        },
      }
    },
  },
  plugins: [],
}


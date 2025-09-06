/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/**/*.{html,js,jsx,ts,tsx}",
  "./public/index.html"
];

export const theme = {
  fontFamily: {
    
     roboto: ["Roboto", "sans-serif"],
  poppins: ["Poppins", "sans-serif"], // lowercase is conventional
  },
  extend: {
    screens: {
   "1000px": "1000px",
        "1100px": "1110px",
        "800px": "800px",
        "1300px": "1300px",
        "400px": "400px"


       
    },
  },
};
export const plugins = [];
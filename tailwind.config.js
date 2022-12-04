/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        cust_redError: 'hsl(0, 100%, 66%)',
        cust_lightGrayishViolet: 'hsl(270, 3%, 87%)',
        cust_DarkGrayishViolet: 'hsl(279, 6%, 55%)',
        cust_darkViolet: 'hsl(278, 68%, 11%)'
      },
      backgroundImage:{
        'hero': "url('/images/bg-main-desktop.png')";
      }
    },
  },
  plugins: [],
}

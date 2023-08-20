module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        body: ['Inter', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif'],
      },
      screens: {
        lg: '1440px',
        galmd: '945px',
        md: '768px',
        sm: '480px',
      },
    },
  },
  plugins: [],
};

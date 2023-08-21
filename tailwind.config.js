module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        body: ['Inter', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif'],
      },
      fontSize: {
        xs: '12px',
        sm: '14px',
        md: '16px',
        lg: '28px',
        xl: '40px',
        '2xl': '48px',
        '3xl': '60px',
      },
      letterSpacing: {
        tightest: '-2px',
        tighter: '-0.05em',
        tight: '-0.03em',
        stight: '-0.01em',
        normal: '0',
        wide: '1px',
      },
      lineHeight: {
        loose: '70px',
        normal: 1.5,
        tight: 1.2,
        tighter: 1.15,
      },
      screens: {
        lg: '1440px',
        galmd: '945px',
        md: '768px',
        sm: '480px',
      },
      colors: {
        green: '#1B5B31',
        gray: '#F5F0EC',
        black: '#111111',
        beige: '#DCC1AB',
      },
      spacing: {
        1: '12px',
        2: '24px',
        3: '48px',
        4: '96px',
        5: '192px',
      },
    },
  },
  plugins: [require('tailwindcss-animated')],
};

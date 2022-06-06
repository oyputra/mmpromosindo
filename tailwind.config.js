module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      // 'xs': '320px',
      // 'sm': '480px',
      'md': '640px',
      'lg': '1024px',
      'xl': '1280px',

      // 'tablet': '640px',
      // => @media (min-width: 640px) { ... }

      // 'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      // 'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      fontFamily: {
        Poppins: ['Poppins']
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
  },
  plugins: [],
}

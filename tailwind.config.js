module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true
    },
    extend: {
      colors: {
        primary: '#14b8a6',
        secondary: '#64748b',
        dark: '#0f172a',
      },
      screens: {
        '2xl': '1320px',
      },

      backgroundImage: {
        'container1':"url('/dist/img/container1.png')",
        'container2':"url('/dist/img/container2.png')",
        'container3':"url('/dist/img/container3.png')",
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
  ]
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false,
  },
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      screens: {
        'tablet': '640px',
      },
      spacing: {
        '10': '10px',
        '20': '20px',
        '30': '30px',
        '40': '40px',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.center-all': {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        },
      });
    },
  ],

}


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


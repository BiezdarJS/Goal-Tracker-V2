/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false,
  },
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
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


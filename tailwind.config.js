/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html', './pages/**/*.html', './dist/**/*.js'],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
    require('tailwind-scrollbar-hide'),
    require('tailwind-scrollbar'),
  ],
  daisyui: {
    themes: [
      {
        adindasLight: {
          primary: "#31075A",
          secondary: "#EBA63F",
          warning: "#FFCC00",
          error: "#DB4343",
          neutral: "#AFB5D2",
          accent: "#5B17B7",
          "base-100": "#E2E7FF",
        },
      },
    ],
  },
}


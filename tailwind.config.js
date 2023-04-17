/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html', './pages/**/*.html', './dist/**/*.js'],
  theme: {
    extend: {
      dropShadow: {
        '3xl': '0 35px 35px rgba(0, 0, 0, 0.25)',
        '4xl': [
            '0 35px 35px rgba(0, 0, 0, 0.25)',
            '0 45px 65px rgba(0, 0, 0, 0.15)'
        ],
        '2lg': ['0 4px 3px rgb(0,0,0,0.07)',
                '0 -6px 2px rgb(0,0,0,0.06)'
        ],
        fontFamily: {
          'inter': ['Inter','ui-sans-serif', 'system-ui']
        }
      },
      colors: {
        'base-200': '#7F8396',
        'base-250': '#616161',
        'primary-100': '#490B73',
        'primary-200': '#400A62',
        'primary-50': '#5846E0',
      },
      dropShadow: {
        '2lg': '5px 6px 16px rgba(0, 0, 0, 0.25)'
      }
    },
  },
  plugins: [
    require('daisyui'),
    require('tailwind-scrollbar-hide'),
    require('tailwind-scrollbar')({ nocompatible: true }),
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


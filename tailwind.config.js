/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './node_modules/flowbite-react/**/*.js',
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
    './public/**/*.html',
  ],
  important: true,
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        Roboto: ['Roboto', 'sans-serif'],
      },
      animation: {
        float: 'float 3s infinite',
      },
      colors: {
        light: '#F9FAFB',
        lightSecondary: '#E5E7EB',
        dark: '#1F2937',
        darkSecondary: '#374151',
      },
      keyframes: {
        float: {
          '0%': {
            transform: 'translateY(0px)',
            animationTimingFunction: 'ease-in-out',
          },
          '50%': {
            transform: 'translateY(-20px)',
            animationTimingFunction: 'ease-in-out',
          },
          '100%': {
            transform: 'translateY(0px)',
            animationTimingFunction: 'ease-in-out',
          },
        },
        refloat: {
          '0%': {
            transform: 'translateY(-20px)',
            animationTimingFunction: 'ease-in-out',
          },
          '50%': {
            transform: 'translateY(0px)',
            animationTimingFunction: 'ease-in-out',
          },
          '100%': {
            transform: 'translateY(-20px)',
            animationTimingFunction: 'ease-in-out',
          },
        },
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};

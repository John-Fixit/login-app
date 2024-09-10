/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Adjust to scan your project files
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'], // Custom Roboto font
        helvetica: ['Exo 2', 'Helvetica Neue', 'Arial', 'sans-serif'], // Custom Helvetica font
      },
    },
  },
  plugins: [],
}


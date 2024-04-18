/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [
    './index.html', // Path to your HTML file(s)
    './src/**/*.{vue,js,ts,jsx,tsx}', // Path to your Vue/JS/TS files
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          green: '#8BC53F',
          'green-dark': '#4C8C2B',
          'green-darker': '#0A1F0A',
          orange: '#F5A623',
          'orange-dark': '#E87A1E',
          gold: '#D3B712',
        },
        // Primary green scale (replaces navy for action/primary elements)
        primary: {
          50: '#f3fae7',
          100: '#e4f4cb',
          200: '#cbea9d',
          300: '#afe065',
          400: '#8BC53F',
          500: '#74a834',
          600: '#4C8C2B',
          700: '#3d7023',
          800: '#2d5419',
          900: '#1a3510',
          950: '#0A1F0A',
        },
        // Secondary orange scale (replaces accent)
        accent: {
          50: '#fff9f0',
          100: '#fef0d9',
          200: '#fddcad',
          300: '#f9c576',
          400: '#F5A623',
          500: '#E87A1E',
          600: '#d06818',
          700: '#b05514',
          800: '#8c4310',
          900: '#6b330c',
        },
        // Dark colors (replaces navy for backgrounds/text)
        navy: {
          50: '#F7F7F7',
          100: '#e8efe3',
          200: '#d1dfc7',
          300: '#b3c9a3',
          400: '#8aaa72',
          500: '#627d4e',
          600: '#4a613a',
          700: '#384a2d',
          800: '#243318',
          900: '#1A1A1A',
          950: '#0A1F0A',
        },
      },
    },
  },
  plugins: [],
}

import type { Config } from "tailwindcss";
const colors = require('tailwindcss/colors')

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: colors.blue[600],
        dark: colors.slate[900],
        "dark-2": colors.slate[800],
        "dark-6": colors.slate[600],
        "body-color": colors.slate[600],
        "body-color-dark": colors.slate[400],
        "gray-1": colors.slate[100],
        "gray-2": colors.slate[200],
      },
      keyframes: {
        square1: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(calc(100vw - 8px))' },
        },
        square2: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(calc(100vw - 8px))' },
        },
        square3: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(calc(100vw - 8px))' },
        },
        square4: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(calc(100vw - 8px))' },
        },
        square5: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(calc(100vw - 8px))' },
        },
        square6: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(calc(100vw - 8px))' },
        },
        square7: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(calc(100vw - 8px))' },
        },
        square8: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(calc(100vw - 8px))' },
        },
        square9: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(calc(100vw - 8px))' },
        },
        square10: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(calc(100vw - 8px))' },
        },
      },
      animation: {
        square1: 'square1 20s linear infinite',
        square2: 'square2 25s linear infinite',
        square3: 'square3 22s linear infinite',
        square4: 'square4 28s linear infinite',
        square5: 'square5 24s linear infinite',
        square6: 'square6 26s linear infinite',
        square7: 'square7 23s linear infinite',
        square8: 'square8 27s linear infinite',
        square9: 'square9 21s linear infinite',
        square10: 'square10 29s linear infinite',
      },
    },
  },
  plugins: [require("tailgrids/plugin")],
};
export default config;

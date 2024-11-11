import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/twr-theme/**/*.{js,ts,jsx,tsx,mdx}", // Include twr-theme
  ],
  darkMode: ['selector', '[data-mode="dark"]'],
  theme: {
    extend: {
      colors: {
        "primary": {
          "25": "rgb(var(--primary-25) / <alpha-value>)",
          "50": "rgb(var(--primary-50) / <alpha-value>)",
          "100": "rgb(var(--primary-100) / <alpha-value>)",
          "200": "rgb(var(--primary-200) / <alpha-value>)",
          "300": "rgb(var(--primary-300) / <alpha-value>)",
          "400": "rgb(var(--primary-400) / <alpha-value>)",
          "500": "rgb(var(--primary-500) / <alpha-value>)",
          "600": "rgb(var(--primary-600) / <alpha-value>)",
          "700": "rgb(var(--primary-700) / <alpha-value>)",
          "800": "rgb(var(--primary-800) / <alpha-value>)",
          "900": "rgb(var(--primary-900) / <alpha-value>)",
          "950": "rgb(var(--primary-950) / <alpha-value>)",
          "DEFAULT": "rgb(var(--primary-500) / <alpha-value>)",
          "light": "rgb(var(--primary-light) / <alpha-value>)",
          "dark": "rgb(var(--primary-dark) / <alpha-value>)"
        },
        "secondary": {
          "25": "rgb(var(--secondary-25) / <alpha-value>)",
          "50": "rgb(var(--secondary-50) / <alpha-value>)",
          "100": "rgb(var(--secondary-100) / <alpha-value>)",
          "200": "rgb(var(--secondary-200) / <alpha-value>)",
          "300": "rgb(var(--secondary-300) / <alpha-value>)",
          "400": "rgb(var(--secondary-400) / <alpha-value>)",
          "500": "rgb(var(--secondary-500) / <alpha-value>)",
          "600": "rgb(var(--secondary-600) / <alpha-value>)",
          "700": "rgb(var(--secondary-700) / <alpha-value>)",
          "800": "rgb(var(--secondary-800) / <alpha-value>)",
          "900": "rgb(var(--secondary-900) / <alpha-value>)",
          "950": "rgb(var(--secondary-950) / <alpha-value>)",
          "DEFAULT": "rgb(var(--secondary-500) / <alpha-value>)",
          "light": "rgb(var(--secondary-light) / <alpha-value>)",
          "dark": "rgb(var(--secondary-dark) / <alpha-value>)"
        }
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "conic-gradient": "conic-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  // plugins: [],
  plugins: [
    plugin(({ addBase, theme }) => {
      console.log(theme('colors.primary.600'));
      addBase({
        '::-webkit-scrollbar': {
          height: '4px',
          width: '4px',
        },
        '::-webkit-scrollbar-thumb': {
          backgroundColor: theme('colors.teal.600'),
        },
        '::-webkit-scrollbar-track-piece': {
          backgroundColor: theme('colors.teal.200'),
        },
      });
    }),
  ],
};

export default config;
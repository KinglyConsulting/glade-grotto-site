/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        parchment: '#F5EFE0',
        surface: '#EDE3CC',
        border: '#C9B99A',
        brown: {
          dark: '#3D2B1F',
          mid: '#7A6252',
        },
        terracotta: '#C17B4E',
        forest: '#6B8F5E',
        sage: '#9FBFA8',
        gold: '#D4A84B',
      },
      fontFamily: {
        cinzel: ['Cinzel', 'serif'],
        crimson: ['"Crimson Pro"', 'serif'],
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

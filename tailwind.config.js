/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        nebula: "url('/public/assets/Nebula.png')",
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#F4F3FF',
          300: '#D9D6FE',
          500: '#53389E',
        },
      },
      aspectRatio: {
        infografic: '4 / 5',
        article: '3 / 2',
        articleCover: '8 / 3',
        infografic2: '2 / 3',
      },
    },
  },
  plugins: [],
}

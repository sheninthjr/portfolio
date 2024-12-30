import type { Config } from 'tailwindcss';

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        orange: '#F35927',
        lightyellow: '#E8F7CA',
        blackish: '#1D1D1D',
        lightwhite: '#D1D1D1',
        gray: '#343434',
      },
      fontFamily: {
        montserrat: ['"Montserrat"', 'sans-serif'],
        noto: ['"Noto Sans"', 'sans-serif'],
        poppins: ['"Poppins"', 'sans-serif'],
        robotoFlex: ['"Roboto Flex"', 'sans-serif'],
        metrophobic: ['"Metrophobic"', 'sans-serif'],
      },
      keyframes: {
        'bounce-1': {
          '0%': { transform: 'translate(0, 0)' },
          '20%': { transform: 'translate(200px, 80px)' },
          '40%': { transform: 'translate(0, 100px)' },
          '60%': { transform: 'translate(180px, 0)' },
          '80%': { transform: 'translate(40px, 100px)' },
          '100%': { transform: 'translate(0, 0)' },
        },
        'bounce-2': {
          '0%': { transform: 'translate(40px, 40px)' },
          '25%': { transform: 'translate(200px, 20px)' },
          '50%': { transform: 'translate(20px, 100px)' },
          '75%': { transform: 'translate(180px, 80px)' },
          '100%': { transform: 'translate(40px, 40px)' },
        },
        'bounce-3': {
          '0%': { transform: 'translate(160px, 0)' },
          '33%': { transform: 'translate(0, 100px)' },
          '66%': { transform: 'translate(200px, 100px)' },
          '100%': { transform: 'translate(160px, 0)' },
        },
        'bounce-4': {
          '0%': { transform: 'translate(120px, 80px)' },
          '25%': { transform: 'translate(0, 20px)' },
          '50%': { transform: 'translate(180px, 100px)' },
          '75%': { transform: 'translate(20px, 0)' },
          '100%': { transform: 'translate(120px, 80px)' },
        },
      },
      animation: {
        'bounce-1': 'bounce-1 20s linear infinite',
        'bounce-2': 'bounce-2 18s linear infinite',
        'bounce-3': 'bounce-3 22s linear infinite',
        'bounce-4': 'bounce-4 25s linear infinite',
      },
    },
  },
  plugins: [],
} satisfies Config;

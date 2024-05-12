import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: {
      red_1: '#F82356',
      red_2: '#FC2F6D',
      red_3: '#E61D4D',
      black_1: '#1E1E1E',
      black_2: '#252525',
      black_3: '#2C2C2C',
      white_1: '#F4F4F4',
      white_2: '#EDEDED',
      white_3: '#E5E5E5',
    },
    fontSize: {
      xs: '0.625rem',
      sm: '1rem',
      base: '1.25rem',
      lg: '1.5rem',
      xl: '2rem',
      '2xl': '2.5rem',
      '3xl': '3.5rem',
      '4xl': '4.5rem',
      '5xl': '6rem',
    },
    fontWeight: {
      'thin': '100',
      'regular': '400',
      'extra-bold': '800',
    }
  },
  plugins: [],
};
export default config;

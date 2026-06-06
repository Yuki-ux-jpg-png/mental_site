import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#FAFAF7',
        sage: '#E8F0ED',
        blue: '#D9E8F5',
        deep: '#20372F',
        teal: '#5D8A8E',
        muted: '#64736C',
      },
      boxShadow: {
        soft: '0 24px 70px rgba(32, 55, 47, 0.10)',
        card: '0 16px 45px rgba(32, 55, 47, 0.08)',
      },
      borderRadius: {
        large: '28px',
      },
    },
  },
  plugins: [],
};
export default config;

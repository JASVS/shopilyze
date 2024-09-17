import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          '30': '#E36A00',
          '40': '#FFD8B5',
          '50': '#FFD5B0',
          '60': '#FFBA7D',
          '70': '#FFA759',
          '80': '#FFAF69',
          '90': '#FDAC65',
          '100': '#FD7600',
        },
        disabled: {
          '90': '#DEDEDE',
          '100': '#A2A1A1',
        },
      },
      fontFamily: {
        'Poppins': ['Poppins', 'sans-serif'],
        'Montserrat': ['Montserrat', 'sans-serif'],
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
export default config;

import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        contrast: {
          accent: '#FD7600',
          '100': '#E36A00',
          '90': '#E37617',
          '80': '#E3822D',
          '70': '#E38E44',
          '60': '#E39A5B',
          '50': '#E3A671',
          '40': '#E3B388',
          '30': '#E3BF9F',
          '20': '#E3CBB6',
          '10': '#E3D7CC',
          '1': '#E3E2E1',
        },
        neutral: {
          index: '#504E4D',
          '100': '#3C3A39',
          '90': '#504E4D',
          '80': '#646260',
          '70': '#797674',
          '60': '#8D8A88',
          '50': '#A29E9B',
          '40': '#B6B2AE',
          '30': '#CAC6C2',
          '20': '#DFDAD6',
          '10': '#F3EEEA',
        },
        'text-color-black': '#120C08',
        'text-color-white': '#F8F2ED',
        mark: {
          correct: '#4AE43C',
          wrong: '#ED4747',
        },
        background: '#FFFCFA',
      },
      fontFamily: {
        Poppins: ['Poppins', 'sans-serif'],
        Montserrat: ['Montserrat', 'sans-serif'],
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

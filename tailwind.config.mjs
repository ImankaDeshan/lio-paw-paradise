/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: '#234D3C',
          deep: '#16332A',
          ink: '#122019',
        },
        beige: {
          DEFAULT: '#F5E8D0',
          soft: '#EFE0C3',
        },
        gold: {
          DEFAULT: '#D9A441',
          deep: '#B8842E',
          pale: '#E8C57F',
        },
        cream: '#FAFAF7',
        sage: '#7C9885',
      },
      fontFamily: {
        display: ['"Fraunces"', 'serif'],
        body: ['"Manrope"', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.28em',
      },
      boxShadow: {
        soft: '0 20px 60px -20px rgba(18, 32, 25, 0.35)',
        card: '0 10px 40px -12px rgba(18, 32, 25, 0.18)',
        glass: '0 8px 32px 0 rgba(18, 32, 25, 0.25)',
      },
      backdropBlur: {
        xs: '2px',
      },
      opacity: {
        4: '0.04',
        5: '0.05',
        6: '0.06',
        7: '0.07',
        8: '0.08',
        10: '0.1',
        12: '0.12',
        15: '0.15',
        20: '0.2',
        22: '0.22',
        25: '0.25',
        30: '0.3',
        35: '0.35',
        40: '0.4',
        45: '0.45',
        50: '0.5',
        55: '0.55',
        60: '0.6',
        65: '0.65',
        70: '0.7',
        75: '0.75',
        80: '0.8',
        85: '0.85',
        90: '0.9',
        92: '0.92',
        95: '0.95',
        98: '0.98',
        100: '1',
      },
      animation: {
        'fade-up': 'fadeUp 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in': 'fadeIn 1.2s ease forwards',
        'slow-zoom': 'slowZoom 12s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(28px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slowZoom: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.12)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};

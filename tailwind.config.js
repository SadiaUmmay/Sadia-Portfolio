// tailwind.config.js
import daisyui from 'daisyui';

export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#0a0a0a',
        'dark-card': '#1a1a1a',
        'dark-text': '#f8f8f8',
        'dark-text-secondary': '#cfcfcf',
        'lilac-400': '#c084fc',
        'lilac-600': '#9333ea',
        'lilac-700': '#7e22ce',
        'lilac-800': '#5b21b6',
        'lilac-900': '#4c1d95',
      },
    },
  },
  plugins: [daisyui],
};

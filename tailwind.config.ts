import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    "./index.html",
    "./src/**/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      animation: {
        'slide-in': 'slide-in 0.3s ease-out', 
        'slide-out': 'slide-out 0.3s ease-out', 
        'ring': 'ring 1s linear infinite', 
      },
      keyframes: {
        'slide-in': {
          '0%': { transform: 'translateY(-20px)', opacity: '0' }, 
          '100%': { transform: 'translateY(0)', opacity: '1' }, 
        },
        'slide-out': {
          '0%': { transform: 'translateY(0)', opacity: '1' }, 
          '100%': { transform: 'translateY(-20px)', opacity: '0' }, 
        },
        ring: {
          '0%': { transform: 'rotate(0deg)' }, 
          '25%': { transform: 'rotate(30deg)' }, 
          '75%': { transform: 'rotate(-30deg)' }, 
          '100%': { transform: 'rotate(0deg)' }, 
        },
      },
    },
  },
  plugins: [],
};

export default config
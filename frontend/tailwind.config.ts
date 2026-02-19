import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        emeraldDeep: '#053B2D',
        goldAccent: '#CBA135'
      },
      backgroundImage: {
        geometric: 'radial-gradient(circle at 10% 20%, rgba(203,161,53,0.14), transparent 30%), radial-gradient(circle at 90% 80%, rgba(255,255,255,0.08), transparent 30%)'
      }
    }
  },
  plugins: []
};

export default config;

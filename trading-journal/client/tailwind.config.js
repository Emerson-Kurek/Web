/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        // Neutral, calm palette — a trading tool should feel steady, not casino-lit.
        ink: '#0f1115',
        panel: '#171a21',
        edge: '#232833',
        muted: '#8b93a3',
        accent: '#4f8cff',
        gain: '#2fb673',
        loss: '#e5544b',
      },
    },
  },
  plugins: [],
};

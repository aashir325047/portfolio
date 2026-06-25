/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        midnight: '#050816',
        cobalt: '#0f172a',
        accent: '#7c3aed',
        glow: '#38bdf8',
      },
      boxShadow: {
        soft: '0 20px 50px rgba(56, 189, 248, 0.16)',
      },
    },
  },
  plugins: [],
}

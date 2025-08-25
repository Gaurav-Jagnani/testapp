/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bodydark: '#111827',
        bodylight: '#ffffff',
        fontdark: '#ffffff',
        fontlight: '#111827',
      },
    },
  },
  plugins: [],
};

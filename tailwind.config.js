/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        walnut:  '#1A0A0A',
        amber:   '#C41E3A',
        gold:    '#E8334A',
        cream:   '#FFF5F5',
        sand:    '#FFE4E4',
        charcoal:'#1C1C1C',
        muted:   '#7A5858',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'serif'],
        body:    ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      boxShadow: {
        warm:   '0 8px 32px rgba(44,26,14,0.18)',
        card:   '0 4px 24px rgba(44,26,14,0.10)',
        hover:  '0 16px 48px rgba(44,26,14,0.22)',
      },
      transitionDuration: {
        400: '400ms',
      }
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Background colors
        'aurma-deep': '#000F1F',
        'aurma-primary': '#0A192F',
        'aurma-secondary': '#001F3F',
        'aurma-border': '#1E3A5F',

        // Accent colors (Gold)
        'aurma-gold': '#D4AF37',
        'aurma-gold-light': '#E8C07B',

        // Text colors
        'aurma-text': '#F5F6F5',
        'aurma-text-muted': '#A6A6A6',
        'aurma-text-dim': '#6B8299',
      },
      fontFamily: {
        'heading': ['"Aktiv Grotesk Extended"', 'system-ui', 'sans-serif'],
        'body': ['Manrope', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'aurma': '0 8px 32px rgba(0, 15, 31, 0.6)',
        'aurma-gold': '0 0 20px rgba(212, 175, 55, 0.15)',
        'aurma-gold-strong': '0 0 30px rgba(212, 175, 55, 0.25)',
      },
      backgroundImage: {
        'aurma-gradient': 'radial-gradient(ellipse at center, rgba(212, 175, 55, 0.08) 0%, transparent 70%)',
        'aurma-card': 'linear-gradient(180deg, rgba(10, 25, 47, 0.8) 0%, rgba(0, 31, 63, 0.6) 100%)',
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background': '#0a111f',
        'lighter-background': '#182135',
        'primary-text': '#FFFFFF',
        'secondary-text': '#393d4d',
        'accent-1': '#3B82F6',
        'accent-2': '#FFB703',
        'highlight': '#1E40AF',
        'success': '#10B981',
        'error': '#FF0000',
        'border': '#E6E6E6',
        'card-background': '#393d4d',
        'terminal-header': '#575757',
        'terminal-bg': '#30363D',
      },
      animation: {
        'blink': 'blink 1s infinite'
      },
      keyframes: {
        blink: {
          '0%': {
            opacity: 1
          },
          '50%': {
            opacity: 0
          },
          '100%': {
            opacity: 1
          }
        }
      }
    },
  },
  plugins: [],
}


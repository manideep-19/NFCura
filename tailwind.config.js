/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        dark: {
          900: '#000000', // Deepest black
          800: '#0a0a0a', // Rich dark gray
          700: '#121212', // Standard surface
          600: '#1e1e1e', // Lighter surface
        },
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          400: '#60a5fa', // Added missing shade
          500: '#3b82f6', // Keep blue for now, or adjust to match "Glass Morphism" text which looks white/clean
          600: '#2563eb',
          700: '#1d4ed8',
          900: '#1e3a8a',
        },
        accent: {
          400: '#D4F26A',
          500: '#bef264',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Unbounded', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      backgroundImage: {
        'glass-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
      }
    },
  },
  plugins: [],
};

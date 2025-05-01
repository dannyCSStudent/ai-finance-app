/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require("nativewind/preset")],
  content: [
    // Paths that should be processed across all apps
    "../../apps/frontend-mobile/**/*.{js,jsx,ts,tsx}",
    "../../apps/frontend-web/**/*.{js,jsx,ts,tsx}",
    "../../packages/ui/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0066FF',
          light: '#4D94FF',
          dark: '#0047B3',
        },
        secondary: {
          DEFAULT: '#6C757D',
          '200': '#ADB5BD',
          '800': '#343A40',
        },
        success: {
          DEFAULT: '#28A745',
          light: '#48C764',
          dark: '#1E7E34',
        },
        danger: {
          DEFAULT: '#DC3545',
          light: '#E45C6A',
          dark: '#BD2130',
        },
        warning: {
          DEFAULT: '#FFC107',
          light: '#FFCD39',
          dark: '#D39E00',
        },
        background: {
          light: '#F8F9FA',
          dark: '#212529',
        }
      },
      spacing: {
        xs: '4px',
        sm: '8px',
        md: '16px',
        lg: '24px',
        xl: '32px',
        '2xl': '48px',
      },
      borderRadius: {
        'none': '0',
        'sm': '4px',
        DEFAULT: '8px',
        'md': '12px',
        'lg': '16px',
        'xl': '24px',
        'full': '9999px',
      },
      fontFamily: {
        sans: ['System', 'sans-serif'],
        // Add more font families if needed
      },
    },
  },
  plugins: [],
}
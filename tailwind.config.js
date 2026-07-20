/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0F766E',
          50: '#E6F5F3',
          100: '#CCEBE7',
          200: '#99D7CF',
          300: '#66C3B7',
          400: '#33AF9F',
          500: '#0F766E',
          600: '#0C5F58',
          700: '#094842',
          800: '#06302C',
          900: '#031816'
        },
        secondary: {
          DEFAULT: '#2563EB',
          50: '#EAF0FE',
          100: '#D5E1FD',
          400: '#4A7FF0',
          500: '#2563EB',
          600: '#1E4FBC',
          700: '#173B8D'
        },
        accent: {
          DEFAULT: '#10B981',
          50: '#E7FBF3',
          400: '#34CB9A',
          500: '#10B981',
          600: '#0D9367'
        },
        ink: '#0B1E1C',
        mist: '#F4F9F8'
      },
      fontFamily: {
        display: ['Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        body: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        premium: '0 20px 60px -15px rgba(15, 118, 110, 0.25)',
        soft: '0 10px 30px -10px rgba(11, 30, 28, 0.12)',
        glow: '0 0 0 1px rgba(255,255,255,0.4), 0 8px 32px rgba(15,118,110,0.18)'
      },
      backdropBlur: {
        xs: '2px'
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem'
      },
      keyframes: {
        pulseLine: {
          '0%': { strokeDashoffset: '1000' },
          '100%': { strokeDashoffset: '0' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' }
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-8px) rotate(3deg)' }
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' }
        }
      },
      animation: {
        pulseLine: 'pulseLine 2.4s ease-in-out infinite',
        float: 'float 6s ease-in-out infinite',
        floatSlow: 'floatSlow 8s ease-in-out infinite',
        shimmer: 'shimmer 2.5s linear infinite'
      }
    }
  },
  plugins: []
}

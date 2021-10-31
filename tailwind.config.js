module.exports = {
  purge: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      borderRadius: {
        '4xl': '2rem',
        'image': 'var(--rounded-image)',
        'list': 'var(--rounded-list)'
      },
      borderWidth: {
        '6': '6px'
      },
      boxShadow: {
        'color': '0 1px 3px 0 rgba(var(--color-theme-700), 0.1), 0 1px 2px 0 rgba(var(--color-theme-700), 0.06)'
      },
      colors: {
        theme: {
          0: 'rgb(var(--color-theme-0))',
          100: 'rgb(var(--color-theme-100))',
          200: 'rgb(var(--color-theme-200))',
          300: 'rgb(var(--color-theme-300))',
          400: 'rgb(var(--color-theme-400))',
          500: 'rgb(var(--color-theme-500))',
          600: 'rgb(var(--color-theme-600))',
          700: 'rgb(var(--color-theme-700))',
          800: 'rgb(var(--color-theme-800))',
          900: 'rgb(var(--color-theme-900))'
        },
        color: {
          100: 'rgb(var(--color-color-100))',
          200: 'rgb(var(--color-color-200))',
          300: 'rgb(var(--color-color-300))',
          400: 'rgb(var(--color-color-400))',
          500: 'rgb(var(--color-color-500))',
          600: 'rgb(var(--color-color-600))',
          700: 'rgb(var(--color-color-700))',
          800: 'rgb(var(--color-color-800))',
          900: 'rgb(var(--color-color-900))'
        }
      },
      gridTemplateColumns: {
        'image': 'repeat(var(--grid-cols-image), minmax(0, 1fr))'
      },
      maxWidth: {
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%'
      },
      minWidth: {
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%'
      },
      scale: {
        '1005': '1.005',
        '101': '1.01',
        '102': '1.02'
      },
      spacing: {
        '22': '5.5rem',
        '34': '8.5rem',
        '68': '17rem',
        '84': '21rem',
        '88': '22rem',
        '92': '23rem'
      },
      zIndex: {
        5: 5,
        60: 60,
        70: 70,
        80: 80,
        90: 90,
        100: 100
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}

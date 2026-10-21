/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Bottle green: buttons, links, icons
        primary: {
          DEFAULT: '#1F4D3F',
          dark: '#143429',
          soft: '#E3EBE6',
        },
        // Terracotta: CTA highlights and badges only
        accent: {
          DEFAULT: '#B4472F',
          dark: '#8E3622',
          soft: '#F5E4DD',
        },
        ink: '#1B1A17', // headings
        muted: '#5F5A52', // body text
        surface: '#F3EDE3', // alternate section background (warm sand)
        paper: '#FBF9F5', // page background
        line: '#E4DCCF', // hairline borders
        white: '#FFFFFF', // cards
        whatsapp: {
          DEFAULT: '#25D366',
          dark: '#1DA851',
        },
      },
      fontFamily: {
        heading: ['Fraunces', 'Georgia', 'serif'],
        body: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      transitionDuration: {
        DEFAULT: '300ms',
      },
      transitionTimingFunction: {
        DEFAULT: 'ease',
      },
      boxShadow: {
        card: '0 1px 2px rgb(27 26 23 / 0.04), 0 12px 32px -16px rgb(27 26 23 / 0.22)',
      },
    },
  },
  plugins: [],
};

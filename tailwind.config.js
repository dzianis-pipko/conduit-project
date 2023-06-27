/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        titillium: ['Titillium Web', 'sans-serif'],
      },
      fontSize: {
        logo: '3.5rem',
        date: '0.8rem',
      },
      colors: {
        conduit: {
          green: '#5CB85C',
          darkGreen: '#3d8b3d',
          lightenGray: '#ddd',
          gray: '#bbb',
          darkestGray: '#373a3c',
          tag: '#aaa',
          darkenGray: '#999',
          pageHoverBg: '#eceeef',
          tagCloudBg: '#f3f3f3',
          tagItemBg: '#818a91',
          tagItemBgDarken: '#687077',
        },
      },
      spacing: {
        navItem: '0.425rem',
        0.3: '0.3rem',
        0.2: '0.2rem',
        tag: '0.6rem',
      },
      boxShadow: {
        banner:
          'inset 0 8px 8px -8px rgba(0, 0, 0, 0.3), inset 0 -8px 8px -8px rgba(0, 0, 0, 0.3)',
      },
      dropShadow: {
        title: '0px 1px 3px rgba(0, 0, 0, 0.3)',
      },
      borderRadius: {
        buttonSm: '0.2rem',
        tag: '10rem',
      },
    },
  },
  plugins: [],
};

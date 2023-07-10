/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      gridAutoRows: {
        'app-layout': '1.5fr 1fr auto',
      },
      colors: {
        'app-color': '#151515'
      },
      backgroundImage: {
        'desktop-background': "url('/src/lib/assets/background.png')",
        'mobile-background': "url('/src/lib/assets/background-mobile.png')",
      }
    },
  },
  plugins: [],
}


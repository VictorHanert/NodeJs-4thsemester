/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      minHeight: {
        'screen': '100vh',
        'form': '580px',
      }
    }
  },
  plugins: []
};
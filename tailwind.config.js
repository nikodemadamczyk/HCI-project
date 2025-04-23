/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./src/**/*.css",
  ],
  theme: {
    extend: {
      colors: {
        'primary-dark': '#00060D',
        'primary-navy': '#151C4C',
        'primary-orange': '#FF7C03',
        'primary-white': '#FFFFFF',
        'dark-gray': '#141414',
        'medium-dark': '#1E1E1E',
        'dark-blue': '#1F2656',
        'medium-blue': '#293060',
        'light-orange': '#FF9017',
        'border-gray': '#E5E7EB',
        'text-gray': '#6B7280',
        'light-gray': '#F3F4F6',
        'success-green': '#059669',
        'error-red': '#DC2626',
        'primary-black': '#000000', 
      },
      gridTemplateColumns: {
        'hero': '1.2fr 0.8fr',
      }
    },
  },
  plugins: [],
}
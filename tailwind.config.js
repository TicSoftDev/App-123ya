/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./utils/**/*.{js,jsx,ts,tsx}",
    "./navigation/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'rosado' : '#d61d56',
      },
      boxShadow: {
        'custom': '0 4px 6px rgba(0, 0, 0, 0.1)',
        // Añade más sombras personalizadas aquí
      },
    },
  },
  plugins: [],
}

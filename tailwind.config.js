/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('https://aakash-sharma.netlify.app/static/media/cloudBg.f28b5c6961fd82be839c.png')",
        'hero2': "url('https://aakash-sharma.netlify.app/static/media/webdev.4d72dbba32efee3890cef9bcacce7aa7.svg')",
      },
    },
  },
  plugins: [],
}


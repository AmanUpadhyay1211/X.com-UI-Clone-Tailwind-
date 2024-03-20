/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {},
  },
  plugins: [require('tailwind-scrollbar')],
}

// # npm
// npm install --save-dev tailwind-scrollbar
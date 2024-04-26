/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Russo One"],
        nav: ["Spectral SC"],
      },
    },
  },
  plugins: [],
};

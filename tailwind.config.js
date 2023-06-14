/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html",
  "./index.html",  // Include index.html outside the public directory
  "./path/to/another.html"  // Include another.html from a different directory
],
  theme: {
    extend: {
      height: {
        '10': '2.7rem', // Custom height value
      },
    },
  },
  plugins: [],
}


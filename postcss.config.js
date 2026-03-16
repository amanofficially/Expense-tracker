// PostCSS is required for Tailwind CSS to work.
// It processes your CSS and applies Tailwind + autoprefixer transforms.
export default {
  plugins: {
    tailwindcss: {},    // Runs Tailwind CSS
    autoprefixer: {},   // Adds vendor prefixes for browser compatibility
  },
}


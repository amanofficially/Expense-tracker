/** @type {import("tailwindcss").Config} */
// This JSDoc comment above enables Tailwind CSS IntelliSense
// auto-suggestions in VS Code (install "Tailwind CSS IntelliSense" extension)
export default {
  // "content" tells Tailwind which files to scan for class names.
  // It only generates CSS for classes it actually finds in these files.
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Add your custom design tokens here.
      // Example: colors: { brand: "#6366f1" }
      // Example: fontFamily: { sans: ["Inter", "sans-serif"] }
    },
  },
  // Add Tailwind plugins here (e.g., @tailwindcss/forms, @tailwindcss/typography)
  plugins: [],
}


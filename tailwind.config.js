/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    // Extends default Tailwind color palette with custom colors.
    extend: {
      colors: {
        primary: {
          DEFAULT: "rgb(var(--primary))",
        },
        secondary: {
          DEFAULT: "rgb(var(--secondary))",
        },
        accent: {
          DEFAULT: "rgb(var(--accent-500))",
          50: "rgb(var(--accent-50))",
          500: "rgb(var(--accent-500))",
          600: "rgb(var(--accent-600))",
        },
      },
      backgroundColor: {
        accent: {
          DEFAULT: "rgb(var(--accent-500))",
          50: "rgb(var(--accent-50))",
          500: "rgb(var(--accent-500))",
          600: "rgb(var(--accent-600))",
        },
        primary: {
          DEFAULT: "rgb(var(--primary))",
        },
        secondary: {
          DEFAULT: "rgb(var(--secondary))",
        },
      },
      borderColor: {
        primary: {
          DEFAULT: "rgb(var(--primary))",
        },
        secondary: {
          DEFAULT: "rgb(var(--secondary))",
        },
      },
      boxShadowColor: {
        accent: {
          DEFAULT: "rgb(var(--accent-500))",
          500: "rgb(var(--accent-500))",
        },
      },
    },
  },
}

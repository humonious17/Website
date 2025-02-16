/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#3b82f6", // Bright blue
        secondary: "#8b5cf6", // Vibrant purple
        background: "#1a1a1a", // Dark base (Supabase-inspired)
        card: "#252525", // Card background
        accent: "#818cf8", // Soft indigo accent
        surface: "#2d2d2d", // Elevated surfaces
        text: "#f8fafc", // Pure white text
      },
      gradientColorStops: {
        "blue-purple": ["#3b82f6", "#8b5cf6"],
      },
    },
  },
  plugins: [],
};

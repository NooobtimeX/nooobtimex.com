import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [
    require("daisyui"), // DaisyUI plugin
    require("@tailwindcss/typography"), // Typography plugin for prose
    require("@tailwindcss/forms"), // Forms plugin for better styling
    require("@tailwindcss/aspect-ratio"), // Aspect ratio utilities
  ],
  daisyui: {
    themes: [
      "forest", // Predefined theme
      {
        customTheme: {
          primary: "#A32A2A",
          secondary: "#ff9800",
          accent: "#607d8b",
          neutral: "#333333",
          "base-100": "#ffffff",
          "base-200": "#f5f5f5",
          "base-300": "#eeeeee",
          info: "#2196f3",
          success: "#4caf50",
          warning: "#ff9800",
          error: "#f44336",
        },
      },
    ],
    darkTheme: "forest", // Default dark theme
    base: true, // Enable/disable global base styles
    styled: true, // Enable/disable component styling
    utils: true, // Enable/disable utility classes
    rtl: false, // Enable right-to-left support
    prefix: "", // Add prefix for DaisyUI classes
    logs: true, // Show logs for DaisyUI setup
  },
};

export default config;

import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "blue-500": "#269AC6",
        "green-100": "#beebc6",
        "green-300": "#69CE7C",
        "green-500": "#18A131",
        "orange-500": "#F4B039",
        "yellow-500": "#F3E626",
        "gray-500": "#444444",
        "gray-300": "#5e5e5e",
        "red-500": "#FF5A5A",
      },
    },
  },
  plugins: [],
}
export default config

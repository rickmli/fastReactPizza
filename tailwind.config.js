/** @type {import('tailwindcss').Config} */

const tailwindConfig = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: "Roboto Mono, monospace",
    },

    extend: {
      fontSize: {
        huge: ["80rem", { lineHeight: "1" }],
      },
      height: { screen: "100dvh" },
      colors: {
        pizza: "#123456",
      },
    },
  },
  plugins: [],
};

export default tailwindConfig;

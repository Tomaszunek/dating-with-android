import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        beat: {
          "0%, 100%": {
            transform: "scale(1.2)",
            opacity: "1",
          },
          "30%": {
            transform: "scale(1.5) rotate(-10deg)",
            opacity: "0.8",
          },

          "70%": {
            transform: "scale(1.5) rotate(10deg)",
            opacity: "1.2",
          },
        },
      },
      animation: {
        beat: "beat 1.2s ease-out infinite",
        "beat-faster": "beat 1s ease-out infinite",
      },
      padding: {
        "1/8wv": "12,5%",
      },
    },
  },
  plugins: [],
} satisfies Config;

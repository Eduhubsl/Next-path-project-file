import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-open-sans)', 'sans-serif'],
        heading: ['var(--font-roboto)', 'sans-serif'],
      },
      colors: {
        'nextpath-blue': 'var(--nextpath-blue)',
        'nextpath-blue-light': 'var(--nextpath-blue-light)',
        'nextpath-red': 'var(--nextpath-red)',
        'nextpath-red-hover': 'var(--nextpath-red-hover)',
        'nextpath-bg': 'var(--nextpath-bg)',
        'nextpath-bg-secondary': 'var(--nextpath-bg-secondary)',
        'nextpath-text': 'var(--nextpath-text)',
        'nextpath-text-light': 'var(--nextpath-text-light)',
        'nextpath-border': 'var(--nextpath-border)',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
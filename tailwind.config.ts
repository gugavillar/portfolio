import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/slices/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        portfolio: {
          background: '#222',
          border: '#333',
          button: {
            border: '#D5D5D5',
            hover: '#007CED',
          },
          '500': 'rgba(255, 255, 255, 0.50)',
          '800': 'rgba(255, 255, 255, 0.80)',
        },
      },
      fontFamily: {
        sans: ['var(--font-poppins)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config

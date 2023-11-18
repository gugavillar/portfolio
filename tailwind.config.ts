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
          gray: {
            '100': '#D5D5D5',
            '200': '#D9D9D9',
            '400': '#555555',
            '500': '#444444',
            '600': '#353535',
            '700': '#333333',
            '800': '#252525',
            '900': '#222222',
          },
          blue: {
            '500': '#007CED',
          },
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

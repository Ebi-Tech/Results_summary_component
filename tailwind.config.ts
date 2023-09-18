import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './component/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'Light-red': '#ff5757',
      'Orangey-yellow': '#ffb01f',
      'Green-teal': '#00bd91',
      'Cobalt-blue': '#1125d4',
      'Light-slate-blue': '#7857ff',
      'Light-royal-blue': '#2e2be9',
      'Violet-blue': '#4e21ca',
      'Persian-blue': '#2421ca',
      'White': '#ffffff',
      'Pale-blue': '#ebf1ff',
      'Light-lavender': '#c8c7ff',
      'Dark-gray-blue': '#303b5a',
    },
  },
  plugins: [],
}
export default config

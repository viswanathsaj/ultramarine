import { type Config } from 'tailwindcss'

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    fontFamily: {
      poppins: 'var(--font-poppins)'
    }
  },
  plugins: []
} satisfies Config

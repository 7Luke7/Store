import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
      'xs': {"min": "320px", "max": "640px"},
      // => @media (min-width: 320px and max-width: 640px) { ... }
      'sm': {'min': '640px', 'max': '767px'},
      // => @media (min-width: 640px and max-width: 767px) { ... }

      'md': {'min': '768px', 'max': '1023px'},
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      'lg': {'min': '1024px', 'max': '1279px'},
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      'xl': {'min': '1280px', 'max': '1535px'},
      // => @media (min-width: 1280px and max-width: 1535px) { ... }

      '2xl': {'min': '1536px'},
      // => @media (min-width: 1536px) { ... }
      },
      translate: {
        "5": "-200px"
      },
      keyframes: {
        slide: {
          '0%': { opacity: '0', width: "0px" },
          '100%': { opacity: '1', width: "300px" },
        },
      },
      animation: {
        "slide-left": "slide 250ms",
      }
    },
  },
  plugins: [],
}
export default config

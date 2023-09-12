/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    colors: {
      white: 'white',
      black: 'black',
      darkGrayBlue: 'hsl(224, 30%, 27%)',
      violetBlue: 'hsla(256, 72%, 46%, 1)',
      lightRed: 'hsl(0, 100%, 67%)',
      orangeyYellow: 'hsl(39, 100%, 56%)',
      greenTeal: 'hsl(166, 100%, 37%)',
      cobaltBlue: 'hsl(234, 85%, 45%)',
      lightSlateBlue: 'hsl(241, 81%, 54%)',
      lightRoyalBlue: 'hsl(241, 81%, 54%)',
      lightLavendar: 'hsl(241, 100%, 89%)'
    },
    extend: {},
  },
  plugins: [],
}


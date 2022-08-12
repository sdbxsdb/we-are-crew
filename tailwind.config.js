


module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'wearecrewBlue': '#03ABEB',
        'wearecrewDarkBlue': '#4F97B9',
        'wearecrewOrange': '#FF9100',
        'wearecrewGreen': '#BCF0C3',
        'wearecrewRed': '#D50000',
        'wearecrewPurple': '#9C27B0',
        'wearecrewPink': '#E91E63',
        'wearecrewTeal': '#009688',
        'wearecrewDarkGrey': '#9E9E9E',
        'wearecrewLightGrey': '#F2F5F6',
      },
      fontFamily: {
        anton: ['anton', 'sans-serif'],
       },
       scale: {
        '102': '1.02',
      }
    },
  },
  plugins: [],
}
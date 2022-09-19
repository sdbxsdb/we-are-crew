


module.exports = {
  important: true,

  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'wearecrewBlueNew': '#2C4258',
        'wearecrewBlue': '#03ABEB',
        'wearecrewDarkBlue': '#4F97B9',
        'wearecrewOrange': '#FF9100',
        'wearecrewGreen': '#70DF7F',
        'wearecrewRed': '#D50000',
        'wearecrewPurple': '#9C27B0',
        'wearecrewPink': '#E91E63',
        'wearecrewTeal': '#009688',
        'wearecrewDarkGrey': '#9E9E9E',
        'wearecrewDarkestGrey': '#484848',
        'wearecrewLightGrey': '#F2F5F6',
        'oneTreeGreen': '#609F44'
      },
      fontFamily: {
        anton: ['anton', 'sans-serif'],
       },
       scale: {
        '102': '1.02',
      },
      zIndex: {
        '1000': '1000',
        '2000': '2000',
        '3000': '3000',
        '4000': '4000',
      }
    },
  },
  plugins: [],
}
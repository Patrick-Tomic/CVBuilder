/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'jetBlack': '	#EDEADE',
        'steel':'	#71797E',
        'hover':'#2ECCC0',
      },
      fontFamily:{
        'signika': ['Signika Negative','system-ui'],
        'ptSerika':['PT Serif', 'system-ui']
      }
  },
},
  plugins: [],
};

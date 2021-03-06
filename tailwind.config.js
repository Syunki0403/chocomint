module.exports = {
  purge: [
    './src/pages/**/*.tsx', // TypeScriptの場合は[.js]ではなく[.tsx]
    './src/components/**/*.tsx', // TypeScriptの場合は[.js]ではなく[.tsx]
  ],
  // darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        rockone: ['RocknRoll One'],
      },
      width: {
        '1/10': '10%',
        '2/10': '20%',
        '3/10': '30%',
        '4/10': '40%',
        '5/10': '50%',
        '6/10': '60%',
        '7/10': '70%',
        '8/10': '80%',
        '9/10': '90%',
        '9/20': '45%',
      },
      screens: {
        '3xl': '1792px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

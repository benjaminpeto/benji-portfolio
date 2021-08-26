module.exports = {
  purge: [
    "./src/components/**/*.{js,jsx}",
    "./public/index.html",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        'code': "url('/src/components/About/coding-bg-dark.png')",
        'lightcode': "url('/src/components/About/lightcode.png')",
       })
    },
  },
  variants: {
    extend: {
      backgroundImage: ['dark'],
    },
  },
  plugins: [],
}

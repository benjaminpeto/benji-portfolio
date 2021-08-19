module.exports = {
  purge: [
    '/src/components/About/About.js',
    '/src/components/Contact/Contact.js',
    '/src/components/Navbar/Navbar.js',
    '/src/components/Projects/Projects.js',
    '/src/components/Skills/Skills.js',
    './public/index.html'
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        'code': "url('/src/components/About/coding-bg-dark.png')",
        'lightcode': "url('/src/components/About/lightcode.png')",
       })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

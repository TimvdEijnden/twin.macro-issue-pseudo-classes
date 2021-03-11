module.exports = {
  theme: {
    extend: {
      colors: {
        electric: '#db00ff',
        ribbon: '#0047ff',
        primary: {
          darkest: '#0C315A',
          dark: '#1862B5',
          DEFAULT: '#1E7BE2',
          light: '#8EBCF1',
          lightest: '#E8F2FC',
        },
        shade: {
          darkest: '#3D4348',
          dark: '#6E757D',
          DEFAULT: '#A7ACB1',
          light: '#D6D9DC',
          lightest: '#F5F6F7',
        },
      },
    },
  },
  plugins: [require('./plugins/buttons.js')()],
}

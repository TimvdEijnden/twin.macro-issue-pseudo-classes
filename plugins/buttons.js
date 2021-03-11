/* eslint-env node */
/* eslint-disable @typescript-eslint/no-var-requires */
const plugin = require('tailwindcss/plugin')

module.exports = () => {
  return plugin(({ addComponents, theme }) => {
    const button = {
      borderRadius: 15,
      borderStyle: 'solid',
      borderWidth: 2,
      padding: '10px',
      display: 'inline',
      whiteSpace: 'nowrap',
      fontWeight: 500,
    }

    addComponents({
      'button-primary': {
        ...button,
        backgroundColor: theme('colors.primary.DEFAULT'),
        borderColor: theme('colors.primary.light'),
        color: theme('colors.white'),
        '&:hover': {
          backgroundColor: theme('colors.primary.dark'),
        },
        '&:disabled': {
          backgroundColor: theme('colors.shade.lightest'),
          borderColor: theme('colors.shade.light'),
          color: theme('colors.shade.DEFAULT'),
          cursor: 'default',
        },
        ':active': {
          backgroundColor: theme('colors.electric'),
        }
      }
    })
  })
}

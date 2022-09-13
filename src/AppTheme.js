import { createTheme, responsiveFontSizes } from '@mui/material'

const themeConfig = {
  palette: {
    mode: 'dark'
  }
}

let theme = createTheme(themeConfig)
theme = responsiveFontSizes(theme)

export default theme

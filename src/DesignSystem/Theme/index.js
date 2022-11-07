import { createTheme } from '@mui/material'
import getPalette from './palete'
import getTypography from './typography'
import breakpoints from './breakpoints'
import getComponents from './components'
import { SPACE_COEFICIENT } from './spacing'

export default function getTheme (colorPalette, mode = 'dark') {
  const { palette, dsColor } = getPalette(colorPalette, mode)
  const { typography, dsTypo, calculateLinerHeight } = getTypography()
  const components = getComponents(dsColor, dsTypo, calculateLinerHeight)

  const themeConfig = {
    components,
    breakpoints,
    palette,
    typography,
    spacing: SPACE_COEFICIENT
  }

  const theme = createTheme(themeConfig)
  window.theme = theme
  return theme
}

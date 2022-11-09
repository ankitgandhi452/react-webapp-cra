import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'

import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Grid from '@mui/material/Grid'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import MenuIcon from '@mui/icons-material/Menu'

import ExamplesButtons from './ExamplesButtons'
import ExamplesTextField from './ExamplesTextField'
import ExamplesAvatars from './ExamplesAvatars'
import ExamplesDialog from './ExamplesDialog'
import ExamplesChips from './ExamplesChips'
import ExamplesAlerts from './ExamplesAlerts'
import ExamplesNotification from './ExamplesNotification'
import ExamplesAppBar from './ExamplesAppBar'
import DsAppBar from '../Components/DsAppBar'
import DsDrawer from '../Components/DsSideNav'
import { isMobileDevice } from '../Utils/browser'

import ViewHeadlineIcon from '@mui/icons-material/ViewHeadline'
import NotificationsIcon from '@mui/icons-material/Notifications'
import ErrorIcon from '@mui/icons-material/Error'
import LabelIcon from '@mui/icons-material/Label'
import PictureInPictureIcon from '@mui/icons-material/PictureInPicture'
import AccessibilityIcon from '@mui/icons-material/Accessibility'
import TextFieldsIcon from '@mui/icons-material/TextFields'
import GamepadIcon from '@mui/icons-material/Gamepad'
import { Toolbar, AppBar, Drawer } from '@mui/material'

const DEFAUT_DESKTOP_OPEN = true
const NAVLINKS = [
  {
    Icon: ViewHeadlineIcon,
    title: 'App Bar',
    compopnentId: 'APP_BAR'
  },
  {
    Icon: NotificationsIcon,
    title: 'Notifications',
    compopnentId: 'NOTIFICATIONS'
  },
  {
    Icon: ErrorIcon,
    title: 'Alerts',
    compopnentId: 'ALERTS'
  },
  {
    Icon: LabelIcon,
    title: 'Chips',
    compopnentId: 'CHIPS'
  },
  {
    Icon: PictureInPictureIcon,
    title: 'Dialog',
    compopnentId: 'DIALOG'
  },
  {
    Icon: AccessibilityIcon,
    title: 'Avatar',
    compopnentId: 'AVATAR'
  },
  {
    Icon: TextFieldsIcon,
    title: 'Text Fields',
    compopnentId: 'TEXTFIELDS'
  },
  {
    Icon: GamepadIcon,
    title: 'Buttons',
    compopnentId: 'BUTTONS'
  }
]
export default class Examples extends PureComponent {
  constructor (props) {
    super(props)

    const isMobileFlag = isMobileDevice()
    this.state = {
      drawerOpen: (isMobileFlag && false) || DEFAUT_DESKTOP_OPEN,
      isMobile: isMobileFlag
    }

    this.handleDrawerOpen = this.handleDrawerOpen.bind(this)
    this.handleDrawerClose = this.handleDrawerClose.bind(this)
    this.handleNavlinkClick = this.handleNavlinkClick.bind(this)
    this.handleDrawerOnResize = this.handleDrawerOnResize.bind(this)
    this.renderSelectedComponent = this.renderSelectedComponent.bind(this)
  }

  componentDidMount () {
    window.addEventListener('resize', this.handleDrawerOnResize)
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.handleDrawerOnResize)
  }

  handleDrawerOnResize () {
    const { isMobile, drawerOpen } = this.state
    const isMobileFlag = isMobileDevice()
    const changeDrawerOpen = (isMobileFlag && drawerOpen) || DEFAUT_DESKTOP_OPEN
    const newState = {}

    if (drawerOpen !== changeDrawerOpen) {
      newState.drawerOpen = changeDrawerOpen
    }

    if (isMobile !== isMobileFlag) {
      newState.isMobile = isMobileFlag
    }

    if (Object.keys(newState).length) {
      this.setState(newState)
    }
  }

  handleDrawerOpen () {
    this.setState({ drawerOpen: true })
  }

  handleDrawerClose () {
    this.setState({ drawerOpen: false })
  }

  handleNavlinkClick (navLink) {
    console.log('navLink clicked', navLink)
  }

  renderSelectedComponent () {
    return <ExamplesButtons />
  }

  render () {
    const { isMobile, drawerOpen } = this.state

    const appBarProps = (!isMobile && {}) || {}
    const drawerProps = (!isMobile && { variant: 'permanent' }) || { variant: 'temporary' }
    // const children = (qe)
    return (
      <Box>
        <AppBar
          // {...appBarProps}
          position='fixed'
          open
          leftIcon={
            <IconButton onClick={this.handleDrawerOpen}>
              <MenuIcon />
            </IconButton>
          }
          content='Example Page'
        />
        <Drawer
          // {...drawerProps}
          variant='permanent'
          open
          onDrawerclose={this.handleDrawerClose}
          onNavlinkClick={this.handleNavlinkClick}
          navLinks={NAVLINKS}
        >
          <Typography>testing drawer MINI_DRAWER_WIDTH</Typography>
        </Drawer>
        <Box component='main' sx={{ flexGrow: 1, p: 3 }}>
          <Toolbar />
          {this.renderSelectedComponent()}
        </Box>
      </Box>
    )
  }
}

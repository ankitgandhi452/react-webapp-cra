import * as React from 'react'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'

import ExamplesButtons from 'src/DesignSystem/Examples/ExamplesButtons'
import ExamplesTextField from 'src/DesignSystem/Examples/ExamplesTextField'
import ExamplesAvatars from 'src/DesignSystem/Examples/ExamplesAvatars'
import ExamplesDialog from 'src/DesignSystem/Examples/ExamplesDialog'
import ExamplesChips from 'src/DesignSystem/Examples/ExamplesChips'
import ExamplesAlerts from 'src/DesignSystem/Examples/ExamplesAlerts'
import ExamplesNotification from 'src/DesignSystem/Examples/ExamplesNotification'
import ExamplesAppBar from 'src/DesignSystem/Examples/ExamplesAppBar'

import DsAppBar from 'src/DesignSystem/Components/DsAppBar'
import DsSideNav from 'src/DesignSystem/Components/DsSideNav'

import MenuIcon from '@mui/icons-material/Menu'
import ViewHeadlineIcon from '@mui/icons-material/ViewHeadline'
import NotificationsIcon from '@mui/icons-material/Notifications'
import ErrorIcon from '@mui/icons-material/Error'
import LabelIcon from '@mui/icons-material/Label'
import PictureInPictureIcon from '@mui/icons-material/PictureInPicture'
import AccessibilityIcon from '@mui/icons-material/Accessibility'
import TextFieldsIcon from '@mui/icons-material/TextFields'
import GamepadIcon from '@mui/icons-material/Gamepad'

import { isMobileDevice } from '../Utils/browser'

const DEFAUT_DESKTOP_OPEN = false
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

const COMPONENTS_MAP = {
  APP_BAR: ExamplesAppBar,
  NOTIFICATIONS: ExamplesNotification,
  ALERTS: ExamplesAlerts,
  CHIPS: ExamplesChips,
  DIALOG: ExamplesDialog,
  AVATAR: ExamplesAvatars,
  TEXTFIELDS: ExamplesTextField,
  BUTTONS: ExamplesButtons
}

export default class AppBarWithMiniSideNav extends React.Component {
  constructor(props) {
    super(props)

    const isMobileFlag = isMobileDevice()
    this.state = {
      drawerOpen: (isMobileFlag && false) || DEFAUT_DESKTOP_OPEN,
      isMobile: isMobileFlag,
      selected: 'APP_BAR'
    }

    this.handleDrawerOpen = this.handleDrawerOpen.bind(this)
    this.handleDrawerClose = this.handleDrawerClose.bind(this)
    this.handleNavlinkClick = this.handleNavlinkClick.bind(this)
    this.handleDrawerOnResize = this.handleDrawerOnResize.bind(this)
    this.renderSelectedComponent = this.renderSelectedComponent.bind(this)
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleDrawerOnResize)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleDrawerOnResize)
  }

  handleDrawerOnResize() {
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

  handleDrawerOpen() {
    this.setState({ drawerOpen: true })
  }

  handleDrawerClose() {
    this.setState({ drawerOpen: false })
  }

  handleNavlinkClick(navLink) {
    const { compopnentId } = navLink
    this.setState({ selected: compopnentId })
  }

  renderSelectedComponent() {
    const { selected } = this.state
    const Component = COMPONENTS_MAP[selected]
    return <Component />
  }

  render() {
    const { isMobile, drawerOpen } = this.state

    const appBarProps = (!isMobile && { dsVariant: 'mini-drawer' }) || {}
    const drawerProps = (!isMobile && { dsVariant: 'mini-drawer', variant: 'permanent' }) || { variant: 'temporary' }
    console.log('this.state', this.state)
    console.log('drawerProps', drawerProps)
    return (
      <Box sx={{ display: 'flex' }}>
        <DsAppBar
          {...appBarProps}
          position='fixed'
          open={drawerOpen}
          leftIcon={
            <IconButton onClick={this.handleDrawerOpen}>
              <MenuIcon />
            </IconButton>
          }
          content={
            <Typography variant='h6' noWrap component='div'>
              Permanent drawer
            </Typography>
          }
        />
        <DsSideNav
          {...drawerProps}
          open={drawerOpen}
          onDrawerclose={this.handleDrawerClose}
          onNavlinkClick={this.handleNavlinkClick}
          navLinks={NAVLINKS}
        />
        <Box
          component='main'
          sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
        >
          <Toolbar />
          {this.renderSelectedComponent()}
        </Box>
      </Box>
    )
  }
}

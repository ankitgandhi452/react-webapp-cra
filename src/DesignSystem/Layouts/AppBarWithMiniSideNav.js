import * as React from 'react'
import PropTypes from 'prop-types'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'

import DsAppBar from 'src/DesignSystem/Components/DsAppBar'
import DsSideNav from 'src/DesignSystem/Components/DsSideNav'

import { isMobileDevice } from '../Utils/browser'
import dsSpacing from '../Theme/spacing'

const DEFAUT_DESKTOP_OPEN = false

export default class AppBarWithMiniSideNav extends React.Component {
  static propTypes = {
    sideNavProps: PropTypes.shape({
      navLinks: PropTypes.arrayOf(
        PropTypes.shape({
          Icon: PropTypes.elementType,
          title: PropTypes.string
        })
      ),
      onNavlinkClick: PropTypes.func
    }),
    appBarProps: PropTypes.shape({
      leftIcon: PropTypes.element,
      content: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
      rightActions: PropTypes.arrayOf(PropTypes.element)
    })
  }

  static defaultProps = {
    sideNavProps: {
      navLinks: []
    },
    appBarProps: {}
  }

  constructor (props) {
    super(props)

    const isMobileFlag = isMobileDevice()
    this.state = {
      drawerOpen: (isMobileFlag && false) || DEFAUT_DESKTOP_OPEN,
      isMobile: isMobileFlag
    }

    this.handleDrawerOpen = this.handleDrawerOpen.bind(this)
    this.handleDrawerClose = this.handleDrawerClose.bind(this)
    this.handleDrawerOnResize = this.handleDrawerOnResize.bind(this)
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

  render () {
    const { isMobile, drawerOpen } = this.state
    const { sideNavProps, appBarProps, children } = this.props
    const { leftIcon, ...restAppBarProps } = appBarProps
    const { onNavlinkClick } = sideNavProps

    const appBarPropsOverride = (!isMobile && { dsVariant: 'mini-drawer' }) || {}
    const sideNavPropsOveride = (!isMobile && { dsVariant: 'mini-drawer', variant: 'permanent' }) || { variant: 'temporary' }

    return (
      <Box sx={{ display: 'flex' }}>
        <DsAppBar
          {...restAppBarProps}
          {...appBarPropsOverride}
          position='fixed'
          open={drawerOpen}
          leftIcon={
            <IconButton onClick={this.handleDrawerOpen}>
              {leftIcon}
            </IconButton>
          }
        />
        <DsSideNav
          {...sideNavProps}
          {...sideNavPropsOveride}
          open={drawerOpen}
          onDrawerclose={this.handleDrawerClose}
          onNavlinkClick={onNavlinkClick}
        />
        <Box
          component='main'
          sx={{
            flexGrow: 1,
            bgcolor: 'background.default',
            p: dsSpacing.mild
          }}
        >
          <Toolbar />
          {children}
        </Box>
      </Box>
    )
  }
}

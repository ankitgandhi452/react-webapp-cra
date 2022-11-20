import PropTypes from 'prop-types'
import React, { Component, Suspense } from 'react'
import { connect } from 'react-redux'
import { RouterProvider } from 'react-router-dom'
import { ThemeProvider } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline'
import { SnackbarProvider } from 'notistack'
import { Helmet } from "react-helmet"

import Loader from './Components/Loader'
import DsNotistackAlert from './DesignSystem/Components/DsNotistackAlert'

import getAppRouter from 'src/Configurations/getAppRouter'
import getTheme from 'src/DesignSystem/Theme'
import {
  initAppMetaFetchAction,
  completeAppMetaFetchAction,
  setAppMetaAction,
  setAppMetaModeAction,
  setAppMetaminimumLoaderTimeCompletedAction,

  getReducer as getAppMetaReducer,
} from './Reducers/AppMeta'

import getAppConfig from 'src/Services/AppConfig/getAppConfig'
import performHandshake from './Services/AppConfig/performHandshake'

class App extends Component {
  static propTypes = {
    persisted: PropTypes.bool.isRequired,
    isLoading: PropTypes.bool.isRequired,
    palette: PropTypes.object,
    minimumLoaderTime: PropTypes.number,
    minimumLoaderTimeCompleted: PropTypes.bool,
  }

  constructor(props) {
    super(props)

    this.initialize = this.initialize.bind(this)
  }

  componentDidMount() {
    this.initialize()
  }

  async initialize() {
    const { actions, minimumLoaderTime } = this.props
    try {
      actions.initAppMetaFetchAction()
      setTimeout(
        () => { actions.setAppMetaminimumLoaderTimeCompletedAction() },
        minimumLoaderTime
      )
      await performHandshake()
      const appConfig = await getAppConfig()
      actions.setAppMetaAction(appConfig)
      actions.completeAppMetaFetchAction()
    } catch (error) {
      console.log('error', error)
      actions.completeAppMetaFetchAction()
    }
  }

  render() {
    const {
      mode,
      palette,
      persisted,
      isLoading,
      fontUrl,
      fontFamilyName,
      minimumLoaderTimeCompleted
    } = this.props

    let children = <Loader />

    const colorPalette = palette[mode]
    const AppTheme = getTheme(colorPalette, mode, fontFamilyName)

    if (minimumLoaderTimeCompleted && persisted && !isLoading) {
      const router = getAppRouter()
      children = <RouterProvider router={router} />
    }

    return (
      <>
        <Helmet>
          <link href={fontUrl} rel="stylesheet" />
        </Helmet>
        <ThemeProvider theme={AppTheme}>
          <CssBaseline enableColorScheme />
          <Suspense loading={<Loader />}>
            <SnackbarProvider
              maxSnack={3}
              preventDuplicate
              anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
              hideIconVariant
              content={(key, options) => <DsNotistackAlert key={key} options={options} />}
              autoHideDuration={4000}
            >
              {children}
            </SnackbarProvider>
          </Suspense>
        </ThemeProvider>
      </>
    )
  }
}

const mapStateToProps = getAppMetaReducer

const mapDispatchToProps = (dispatch) => (
  {
    actions: {
      initAppMetaFetchAction: () => dispatch(initAppMetaFetchAction()),
      completeAppMetaFetchAction: () => dispatch(completeAppMetaFetchAction()),
      setAppMetaminimumLoaderTimeCompletedAction: () => dispatch(setAppMetaminimumLoaderTimeCompletedAction()),
      setAppMetaAction: (palette) => dispatch(setAppMetaAction(palette)),
      setAppMetaModeAction: (mode) => dispatch(setAppMetaModeAction(mode)),
    }
  }
)

export default connect(mapStateToProps, mapDispatchToProps)(App)
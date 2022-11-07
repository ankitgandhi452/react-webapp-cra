import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { ThemeProvider } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline'
import { SnackbarProvider } from 'notistack'

import Loader from './Components/Loader'
import DsNotistackAlert from './DesignSystem/Components/DsNotistackAlert'

import getAppRouter from './getAppRouter'
import AppStore, { PersistedAppStore } from 'src/AppStore'
import getTheme from 'src/DesignSystem/Theme'
import './index.css'

import * as serviceWorkerRegistration from 'src/serviceWorkerRegistration'
import reportWebVitals from 'src/reportWebVitals'

const onBeforeLift = () => ({})

const palettes = {
  dark: {
    primary: '#97144D',

    secondary1: '#ED1164',
    secondary2: '#F14687',
    secondary3: '#F57BA9',
    secondary4: '#F9B0CC',
    secondary5: '#F9B0CC',

    black: '#000000',
    blackLight: '#282828',
    white: '#FFFFFF',

    grey1: '#404040',
    grey2: '#575757',
    grey3: '#6E6E6E',
    grey4: '#858585',
    grey5: '#9D9D9D',
    grey6: '#B4B4B4',
    grey7: '#CBCBCB',
    grey8: '#E2E2E2',
    grey9: '#F1F1F1',
    grey10: '#F9F9F9',

    tertiary1: '#F3FBFB',
    tertiary2: '#E6F8F4',
    tertiary3: '#B8DDDB',
    tertiary4: '#3D7F7C',
    tertiary5: '#154B3F',
    tertiaryLight: '#081919',
    tertiaryExtraLight: '#154B3F',

    negative: '#EB0000',
    negativeLight: '#320F19',

    positive: '#278829',
    positiveLight: '#0C1907',

    pending: '#FEC600',
    pendingLight: '#322A0F',

    warning: '#D84008',
    warningLight: '#321E0F',

    variable: '#145599',
    variableLight: '#0F1B32',
    variableExtraLight: '#0C1015',

    typical: '#165964',
    typicalLight: '#E3F5F8'
  },

  light: {
    primary: '#97144D',

    secondary1: '#ED1164',
    secondary2: '#F14687',
    secondary3: '#F57BA9',
    secondary4: '#F9B0CC',
    secondary5: '#F9B0CC',

    black: '#000000',
    blackLight: '#282828',
    white: '#FFFFFF',

    grey1: '#404040',
    grey2: '#575757',
    grey3: '#6E6E6E',
    grey4: '#858585',
    grey5: '#9D9D9D',
    grey6: '#B4B4B4',
    grey7: '#CBCBCB',
    grey8: '#E2E2E2',
    grey9: '#F1F1F1',
    grey10: '#F9F9F9',

    tertiary1: '#12877F',
    tertiary2: '#49A49E',
    tertiary3: '#81C1BD',
    tertiary4: '#B8DDDB',
    tertiary5: '#E6F8F4',
    tertiaryLight: '#F3FBFB',
    tertiaryExtraLight: '#EBF9F8',

    negative: '#EB0000',
    negativeLight: '#F9EBEF',

    positive: '#278829',
    positiveLight: '#EFF9EB',

    pending: '#FEC600',
    pendingLight: '#F9F6EB',

    warning: '#D84008',
    warningLight: '#F9F1EB',

    variable: '#145599',
    variableLight: '#EBF0F9',
    variableExtraLight: '#F1F4F7',

    typical: '#165964',
    typicalLight: '#E3F5F8'
  }
}

const mode = 'dark'
const colorPalette = palettes[mode]
const AppTheme = getTheme(colorPalette, mode)

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <Provider store={AppStore}>
      <PersistGate
        persistor={PersistedAppStore}
        onBeforeLift={onBeforeLift}
      >
        {(persisted) => {
          if (!persisted) return <Loader />
          const router = getAppRouter()
          return (
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
                  <RouterProvider router={router} />
                </SnackbarProvider>
              </Suspense>
            </ThemeProvider>
          )
        }}
      </PersistGate>
    </Provider>
  </React.StrictMode>
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register()

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()

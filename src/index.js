import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { CssBaseline, ThemeProvider } from '@mui/material'

import getAppRouter from './getAppRouter'
import AppStore, { PersistedAppStore } from 'src/AppStore'
import AppTheme from 'src/AppTheme'
import './index.css'

import * as serviceWorkerRegistration from 'src/serviceWorkerRegistration'
import Loader from './Components/Loader'
// import reportWebVitals from 'src/reportWebVitals'

const onBeforeLift = () => ({})

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <ThemeProvider theme={AppTheme}>
      <CssBaseline enableColorScheme />
      <Provider store={AppStore}>
        <PersistGate
          persistor={PersistedAppStore} onBeforeLift={onBeforeLift}
        >
          {(persisted) => {
            if (!persisted) return <Loader />
            const router = getAppRouter()
            return (
              <Suspense loading={<Loader />}>
                <RouterProvider router={router} />
              </Suspense>
            )
          }}
        </PersistGate>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register()

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals()

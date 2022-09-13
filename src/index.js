import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  BrowserRouter as Router
} from 'react-router-dom'
import { Provider } from 'react-redux'
import { CssBaseline, ThemeProvider } from '@mui/material'

import App from 'src/App'
import AppStore from 'src/AppStore'
import AppTheme from 'src/AppTheme'
import './index.css'

import * as serviceWorkerRegistration from 'src/serviceWorkerRegistration'
import reportWebVitals from 'src/reportWebVitals'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <ThemeProvider theme={AppTheme}>
      <CssBaseline enableColorScheme />
      <Provider store={AppStore}>
        <Router>
          <App />
        </Router>
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
reportWebVitals()

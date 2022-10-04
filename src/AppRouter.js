import React from 'react'
import {
  createBrowserRouter
} from 'react-router-dom'

import {
  HOME_PAGE
} from './Constants/APP_ROUTES'

const AppPage = React.lazy(() => import('src/App'))
const HomePage = React.lazy(() => import('src/Pages/Home/Home.Container'))

export default createBrowserRouter([
  {
    path: '/',
    element: <AppPage />,
    children: [
      {
        path: HOME_PAGE,
        element: <HomePage />
      }
    ]
  }
])

import React from 'react'
import {
  createBrowserRouter,
  redirect
} from 'react-router-dom'

import {
  LOGIN_PAGE,
  HOME_PAGE
} from './Constants/APP_ROUTES'
import { checkIfLoggedIn } from './Utils/authentication'

const AppPage = React.lazy(() => import('src/App'))
const HomePage = React.lazy(() => import('src/Pages/Home/Home.Container'))
const LoginPage = React.lazy(() => import('src/Pages/Login/Login.Container'))

const DEFAULT_LOGGED_IN_ROUTE = HOME_PAGE
const DEFAULT_NOT_LOGGED_IN_ROUTE = LOGIN_PAGE

const constructFromUrl = (route, params, redirectRoute) => {
  const fromUrl = route
  Object.entries(params).forEach(entry => {
    const [key, value] = entry
    fromUrl.replace(`:${key}`, value)
  })
  const redirectUrl = `${redirectRoute}?from=${fromUrl}`
  return redirectUrl
}

const redirectIfNotLoggedIn = (route) => ({ params }) => {
  const isLoggedIn = checkIfLoggedIn()
  if (!isLoggedIn) {
    const redirectUrl = constructFromUrl(route, params, DEFAULT_NOT_LOGGED_IN_ROUTE)
    return redirect(redirectUrl)
  }
}

const redirectIfLoggedIn = (route) => ({ params }) => {
  const isLoggedIn = checkIfLoggedIn()
  if (isLoggedIn) {
    const redirectUrl = constructFromUrl(route, params, DEFAULT_LOGGED_IN_ROUTE)
    return redirect(redirectUrl)
  }
}

export default createBrowserRouter([
  {
    path: '/',
    element: <AppPage />,
    children: [
      {
        path: HOME_PAGE,
        element: <HomePage />,
        loader: redirectIfNotLoggedIn(HOME_PAGE)
      },
      {
        path: LOGIN_PAGE,
        element: <LoginPage />,
        loader: redirectIfLoggedIn(LOGIN_PAGE)
      }
    ]
  }
])

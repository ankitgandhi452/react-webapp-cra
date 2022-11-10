import React from 'react'
import {
  createBrowserRouter,
  redirect
} from 'react-router-dom'

import {
  LOGIN_PAGE,
  HOME_PAGE,

  EXAMPLES_PAGE
} from './Constants/APP_ROUTES'
import { checkIfLoggedIn } from './Utils/authentication'

const AuthLayout = React.lazy(() => import('src/Layouts/Auth.Layout'))
const DsExampleLayout = React.lazy(() => import('src/Layouts/DsExample.Layout'))
const UnauthLayout = React.lazy(() => import('src/Layouts/Unauth.Layout'))
const HomePage = React.lazy(() => import('src/Pages/Home/Home.Container'))
const LoginPage = React.lazy(() => import('src/Pages/Login/Login.Container'))

const ExamplesPage = React.lazy(() => import('src/DesignSystem/Examples'))

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

const getAppRouter = () => createBrowserRouter([
  {
    element: <AuthLayout />,
    children: [
      {
        path: HOME_PAGE,
        element: <HomePage />,
        loader: redirectIfNotLoggedIn(HOME_PAGE)
      }
    ]
  },
  {
    element: <UnauthLayout />,
    children: [
      {
        path: LOGIN_PAGE,
        element: <LoginPage />,
        loader: redirectIfLoggedIn(LOGIN_PAGE)
      }
    ]
  },
  {
    element: <DsExampleLayout />,
    children: [
      {
        path: EXAMPLES_PAGE,
        element: <ExamplesPage />
      }
    ]
  }
])

export default getAppRouter

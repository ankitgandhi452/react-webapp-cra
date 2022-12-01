import React from 'react'
import {
  createBrowserRouter,
  redirect
} from 'react-router-dom'
import ErrorBoundary from 'src/Components/ErrorBoundary'

import {
  LOGIN_PAGE,
  HOME_PAGE,

  EXAMPLES_PAGE
} from 'src/Constants/APP_ROUTES'
import { checkIfLoggedIn } from 'src/Utils/authentication'

const AuthLayout = React.lazy(
  () => import(
    /* webpackChunkName: "AuthLayout" */
    /* webpackMode: "lazy" */
    /* webpackPreload: true */
    'src/Layouts/Auth.Layout'
  )
)

const DsExampleLayout = React.lazy(
  () => import(
    /* webpackChunkName: "DsExampleLayout" */
    /* webpackMode: "lazy" */
    /* webpackPreload: true */
    'src/Layouts/DsExample.Layout'
  )
)

const UnauthLayout = React.lazy(
  () => import(
    /* webpackChunkName: "DsExampleLayout" */
    /* webpackMode: "lazy" */
    /* webpackPreload: true */
    'src/Layouts/Unauth.Layout'
  )
)

const HomePage = React.lazy(
  () => import(
    /* webpackChunkName: "HomePage" */
    /* webpackMode: "lazy" */
    /* webpackPreload: true */
    'src/Pages/Home/Home.Container'
  )
)

const LoginPage = React.lazy(
  () => import(
    /* webpackChunkName: "LoginPage" */
    /* webpackMode: "lazy" */
    /* webpackPreload: true */
    'src/Pages/Login/Login.Container'
  )
)

const Page404Page = React.lazy(
  () => import(
    /* webpackChunkName: "Page404Page" */
    /* webpackMode: "lazy" */
    /* webpackPreload: true */
    'src/Pages/Page404/Page404.Container'
  )
)

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
    ],
    errorElement: <ErrorBoundary />
  },
  {
    element: <UnauthLayout />,
    children: [
      {
        path: LOGIN_PAGE,
        element: <LoginPage />,
        loader: redirectIfLoggedIn(LOGIN_PAGE)
      }
    ],
    errorElement: <ErrorBoundary />
  },
  {
    element: <DsExampleLayout />,
    children: [
      {
        path: EXAMPLES_PAGE,
        element: <ExamplesPage />
      }
    ],
    errorElement: <ErrorBoundary />
  },
  {
    path: '*',
    element: <Page404Page />
  }
])

export default getAppRouter
